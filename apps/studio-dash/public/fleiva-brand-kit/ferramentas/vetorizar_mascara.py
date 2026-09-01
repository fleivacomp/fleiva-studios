#!/usr/bin/env python3
"""Converte o canal alpha de uma marca raster em caminhos SVG simplificados."""

from __future__ import annotations

import argparse
import math
from collections import defaultdict
from pathlib import Path

from PIL import Image


SEGMENTOS = {
    1: ((3, 0),),
    2: ((0, 1),),
    3: ((3, 1),),
    4: ((1, 2),),
    5: ((3, 0), (1, 2)),
    6: ((0, 2),),
    7: ((3, 2),),
    8: ((2, 3),),
    9: ((0, 2),),
    10: ((0, 1), (2, 3)),
    11: ((1, 2),),
    12: ((1, 3),),
    13: ((0, 1),),
    14: ((3, 0),),
}


def ponto_aresta(x: int, y: int, aresta: int) -> tuple[int, int]:
    pontos = (
        (2 * x + 1, 2 * y),
        (2 * x + 2, 2 * y + 1),
        (2 * x + 1, 2 * y + 2),
        (2 * x, 2 * y + 1),
    )
    return pontos[aresta]


def remover_colineares(pontos: list[tuple[int, int]]) -> list[tuple[int, int]]:
    if len(pontos) < 4:
        return pontos

    resultado: list[tuple[int, int]] = []
    total = len(pontos)

    for indice, atual in enumerate(pontos):
        anterior = pontos[(indice - 1) % total]
        seguinte = pontos[(indice + 1) % total]
        produto = (
            (atual[0] - anterior[0]) * (seguinte[1] - atual[1])
            - (atual[1] - anterior[1]) * (seguinte[0] - atual[0])
        )

        if produto != 0:
            resultado.append(atual)

    return resultado if len(resultado) >= 3 else pontos


def distancia_segmento(
    ponto: tuple[int, int],
    inicio: tuple[int, int],
    fim: tuple[int, int],
) -> float:
    dx = fim[0] - inicio[0]
    dy = fim[1] - inicio[1]

    if dx == 0 and dy == 0:
        return math.dist(ponto, inicio)

    t = max(
        0.0,
        min(
            1.0,
            ((ponto[0] - inicio[0]) * dx + (ponto[1] - inicio[1]) * dy)
            / (dx * dx + dy * dy),
        ),
    )
    projecao = (inicio[0] + t * dx, inicio[1] + t * dy)
    return math.dist(ponto, projecao)


def rdp(pontos: list[tuple[int, int]], tolerancia: float) -> list[tuple[int, int]]:
    if len(pontos) <= 2:
        return pontos

    maior_distancia = 0.0
    maior_indice = 0

    for indice in range(1, len(pontos) - 1):
        distancia = distancia_segmento(pontos[indice], pontos[0], pontos[-1])
        if distancia > maior_distancia:
            maior_distancia = distancia
            maior_indice = indice

    if maior_distancia <= tolerancia:
        return [pontos[0], pontos[-1]]

    esquerda = rdp(pontos[: maior_indice + 1], tolerancia)
    direita = rdp(pontos[maior_indice:], tolerancia)
    return esquerda[:-1] + direita


def simplificar_ciclo(
    pontos: list[tuple[int, int]],
    tolerancia: float,
) -> list[tuple[int, int]]:
    pontos = remover_colineares(pontos)
    if len(pontos) < 6:
        return pontos

    origem = pontos[0]
    corte = max(
        range(1, len(pontos)),
        key=lambda indice: math.dist(origem, pontos[indice]),
    )

    primeira = rdp(pontos[: corte + 1], tolerancia)
    segunda = rdp(pontos[corte:] + [pontos[0]], tolerancia)
    resultado = primeira[:-1] + segunda[:-1]
    return remover_colineares(resultado)


def extrair_contornos(
    imagem: Image.Image,
    limiar: int,
    tolerancia: float,
) -> tuple[list[list[tuple[int, int]]], int, int]:
    alpha = imagem.convert("RGBA").getchannel("A")
    caixa = alpha.getbbox()
    if caixa is None:
        raise ValueError("A imagem não possui pixels visíveis.")

    alpha = alpha.crop(caixa)
    largura, altura = alpha.size
    pixels = alpha.load()

    mascara = [
        [False] * (largura + 2)
        for _ in range(altura + 2)
    ]

    for y in range(altura):
        for x in range(largura):
            mascara[y + 1][x + 1] = pixels[x, y] >= limiar

    segmentos: list[tuple[tuple[int, int], tuple[int, int]]] = []

    for y in range(altura + 1):
        for x in range(largura + 1):
            indice = (
                (1 if mascara[y][x] else 0)
                | (2 if mascara[y][x + 1] else 0)
                | (4 if mascara[y + 1][x + 1] else 0)
                | (8 if mascara[y + 1][x] else 0)
            )

            for primeira, segunda in SEGMENTOS.get(indice, ()):
                segmentos.append(
                    (
                        ponto_aresta(x, y, primeira),
                        ponto_aresta(x, y, segunda),
                    )
                )

    adjacencias: dict[tuple[int, int], list[int]] = defaultdict(list)
    for indice, (inicio, fim) in enumerate(segmentos):
        adjacencias[inicio].append(indice)
        adjacencias[fim].append(indice)

    usados: set[int] = set()
    contornos: list[list[tuple[int, int]]] = []

    for indice_inicial, (inicio, fim) in enumerate(segmentos):
        if indice_inicial in usados:
            continue

        usados.add(indice_inicial)
        caminho = [inicio, fim]
        atual = fim

        while atual != inicio:
            candidatos = [
                indice
                for indice in adjacencias[atual]
                if indice not in usados
            ]
            if not candidatos:
                break

            proximo_indice = candidatos[0]
            usados.add(proximo_indice)
            a, b = segmentos[proximo_indice]
            atual = b if a == atual else a
            caminho.append(atual)

        if caminho[-1] == caminho[0]:
            caminho.pop()

        if len(caminho) >= 3:
            contornos.append(
                simplificar_ciclo(caminho, tolerancia * 2)
            )

    return contornos, largura, altura


def numero(valor: float) -> str:
    if valor.is_integer():
        return str(int(valor))
    return f"{valor:.1f}".rstrip("0").rstrip(".")


def criar_caminho(
    contornos: list[list[tuple[int, int]]],
    margem: int,
) -> str:
    comandos: list[str] = []

    for contorno in contornos:
        pontos = [
            (x / 2 - 1 + margem, y / 2 - 1 + margem)
            for x, y in contorno
        ]
        comandos.append(
            "M"
            + "L".join(
                f"{numero(float(x))} {numero(float(y))}"
                for x, y in pontos
            )
            + "Z"
        )

    return "".join(comandos)


def escrever_svg(
    destino: Path,
    caminho: str,
    largura: int,
    altura: int,
    margem: int,
    modo: str,
) -> None:
    view_largura = largura + margem * 2
    view_altura = altura + margem * 2

    if modo == "flat":
        corpo = f"""  <title id=\"titulo-fleiva\">Flêiva</title>
  <path d=\"{caminho}\" fill=\"currentColor\" fill-rule=\"evenodd\"/>"""
        estilo = "  <style>:root { color: #5e886f; }</style>\n"
    else:
        corpo = f"""  <title id=\"titulo-fleiva\">Flêiva</title>
  <defs>
    <path id=\"marca\" d=\"{caminho}\" fill-rule=\"evenodd\"/>
  </defs>
  <g class=\"fleiva\">
    <use href=\"#marca\" xlink:href=\"#marca\" class=\"camada camada-clara\" x=\"-2\" y=\"-1\" fill=\"#f7f2e0\"/>
    <use href=\"#marca\" xlink:href=\"#marca\" class=\"camada camada-roxa\" x=\"4\" y=\"5\" fill=\"#885f74\"/>
    <use href=\"#marca\" xlink:href=\"#marca\" class=\"camada camada-verde\" fill=\"#5e886f\"/>
  </g>"""
        estilo = """  <style>
    .camada { transform-box: fill-box; transform-origin: center; }
    svg:hover .camada-clara { animation: jitter-claro 360ms steps(2, end); }
    svg:hover .camada-roxa { animation: jitter-roxo 360ms steps(2, end); }
    svg:hover .camada-verde { animation: jitter-verde 360ms steps(2, end); }
    @keyframes jitter-claro {
      0%, 100% { transform: translate(0); }
      25% { transform: translate(-3px, 2px); }
      50% { transform: translate(3px, -2px); }
      75% { transform: translate(-1px, 3px); }
    }
    @keyframes jitter-roxo {
      0%, 100% { transform: translate(0); }
      25% { transform: translate(3px, -3px); }
      50% { transform: translate(-3px, 2px); }
      75% { transform: translate(2px, 1px); }
    }
    @keyframes jitter-verde {
      0%, 100% { transform: translate(0); }
      25% { transform: translate(1px, -1px); }
      50% { transform: translate(-1px, 1px); }
      75% { transform: translate(1px, 0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .camada { animation: none !important; }
    }
  </style>
"""

    destino.write_text(
        f"""<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 {view_largura} {view_altura}\" role=\"img\" aria-labelledby=\"titulo-fleiva\">
{estilo}{corpo}
</svg>
""",
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("entrada", type=Path)
    parser.add_argument("destino", type=Path)
    parser.add_argument("--modo", choices=("flat", "jitter"), default="flat")
    parser.add_argument("--limiar", type=int, default=32)
    parser.add_argument("--tolerancia", type=float, default=1.15)
    parser.add_argument("--margem", type=int, default=18)
    argumentos = parser.parse_args()

    imagem = Image.open(argumentos.entrada)
    contornos, largura, altura = extrair_contornos(
        imagem,
        argumentos.limiar,
        argumentos.tolerancia,
    )
    caminho = criar_caminho(contornos, argumentos.margem)
    escrever_svg(
        argumentos.destino,
        caminho,
        largura,
        altura,
        argumentos.margem,
        argumentos.modo,
    )


if __name__ == "__main__":
    main()
