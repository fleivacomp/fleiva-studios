import {
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  signal,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, RouterLink, type ParamMap } from "@angular/router";
import {
  DadosContatos,
  DadosProjetosArtisticos,
  ClienteSupabase,
  type CadastroMembroProjeto,
  type CadastroProjetoArtistico,
  type MembroProjetoCompleto,
  type ProjetoArtisticoCompleto,
} from "@fleiva-studios/shared-data-access";

@Component({
  selector: "app-projetos-artisticos",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: "./projetos-artisticos.html",
  styleUrl: "./projetos-artisticos.scss",
})
export class ProjetosArtisticos implements OnInit {
  readonly dadosProjetos = inject(DadosProjetosArtisticos);
  readonly dadosContatos = inject(DadosContatos);
  readonly modoEstudio = signal(false);

  private readonly clienteSupabase = inject(ClienteSupabase);
  private readonly construtorFormulario = inject(FormBuilder);
  private readonly rota = inject(ActivatedRoute);
  private readonly destruirRef = inject(DestroyRef);

  readonly projetoEditandoId = signal<string | null>(null);
  readonly formularioProjetoVisivel = signal(false);
  readonly projetoSelecionadoId = signal<string | null>(null);
  readonly projetoMembroId = signal<string | null>(null);
  readonly membroEditandoId = signal<string | null>(null);
  readonly salvandoProjeto = signal(false);
  readonly salvandoMembro = signal(false);
  readonly excluindoProjetoId = signal<string | null>(null);
  readonly excluindoMembroId = signal<string | null>(null);
  readonly enviandoCapaId = signal<string | null>(null);
  readonly removendoCapaId = signal<string | null>(null);
  readonly erroOperacao = signal<string | null>(null);

  readonly formularioProjeto = this.construtorFormulario.group({
    nome: this.construtorFormulario.nonNullable.control("", [
      Validators.required,
    ]),
    tipo: this.construtorFormulario.nonNullable.control("solo", [
      Validators.required,
    ]),
  });

  readonly formularioMembro = this.construtorFormulario.group({
    contato_id: this.construtorFormulario.nonNullable.control("", [
      Validators.required,
    ]),
    papel: this.construtorFormulario.nonNullable.control("", [
      Validators.required,
    ]),
    ativo: this.construtorFormulario.nonNullable.control(true),
  });

  readonly projetoSelecionado = computed(() => {
    const projetoId = this.projetoSelecionadoId();

    return (
      this.dadosProjetos
        .projetos()
        .find((projeto) => projeto.id === projetoId) ?? null
    );
  });

  ngOnInit(): void {
    void this.inicializar();
  }

  private async inicializar(): Promise<void> {
    await this.carregarDados();

    if (!this.projetoSelecionadoId()) {
      this.projetoSelecionadoId.set(
        this.dadosProjetos.projetos()[0]?.id ?? null,
      );
    }

    this.rota.queryParamMap
      .pipe(takeUntilDestroyed(this.destruirRef))
      .subscribe((parametros) => {
        this.aplicarContextoDaRota(parametros);
      });
  }

  private aplicarContextoDaRota(parametros: ParamMap): void {
    const projetoId = parametros.get("projeto")?.trim();
    const projeto = this.dadosProjetos
      .projetos()
      .find((item) => item.id === projetoId);

    if (!projeto) {
      return;
    }

    this.projetoSelecionadoId.set(projeto.id);

    if (parametros.get("novoMembro") === "1") {
      this.abrirNovoMembro(projeto.id);
    }

    if (parametros.get("editar") === "1") {
      this.editarProjeto(projeto);
      return;
    }

    window.setTimeout(() => {
      document.getElementById("projeto-selecionado")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
async carregarDados(): Promise<void> {
  const {
    data: { user },
  } = await this.clienteSupabase.cliente.auth.getUser();

  if (!user) {
    return;
  }

  const { data: estudio } =
    await this.clienteSupabase.cliente
      .from('estudios')
      .select('id')
      .eq('id', user.id)
      .maybeSingle();

  this.modoEstudio.set(!!estudio);

  await this.dadosProjetos.listar();

  if (estudio) {
    await this.dadosContatos.listar();
  }
}
  async salvarProjeto(): Promise<void> {
    if (this.formularioProjeto.invalid) {
      this.formularioProjeto.markAllAsTouched();
      return;
    }

    this.salvandoProjeto.set(true);
    this.erroOperacao.set(null);

    try {
      const valor = this.formularioProjeto.getRawValue();

      const dados: CadastroProjetoArtistico = {
        nome: valor.nome,
        tipo: valor.tipo,
      };

      const projetoId = this.projetoEditandoId();

      if (projetoId) {
        await this.dadosProjetos.atualizarProjeto(projetoId, dados);
      } else {
        await this.dadosProjetos.cadastrarProjeto(dados);
      }

      this.limparFormularioProjeto();
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoProjeto.set(false);
    }
  }

  abrirNovoProjeto(): void {
    this.limparFormularioProjeto();
    this.formularioProjetoVisivel.set(true);

    window.setTimeout(() => {
      document.getElementById("formulario-projeto")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  editarProjeto(projeto: ProjetoArtisticoCompleto): void {
    this.projetoEditandoId.set(projeto.id);
    this.formularioProjetoVisivel.set(true);
    this.erroOperacao.set(null);

    this.formularioProjeto.setValue({
      nome: projeto.nome,
      tipo: projeto.tipo,
    });

    window.setTimeout(() => {
      document.getElementById("formulario-projeto")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  cancelarEdicaoProjeto(): void {
    this.limparFormularioProjeto();
    this.formularioProjetoVisivel.set(false);
  }

  selecionarProjeto(projetoId: string): void {
    if (this.projetoSelecionadoId() === projetoId) {
      return;
    }

    this.projetoSelecionadoId.set(projetoId);
    this.fecharFormularioMembro();
    this.erroOperacao.set(null);
  }

  async excluirProjeto(projeto: ProjetoArtisticoCompleto): Promise<void> {
    const confirmou = window.confirm(
      `Excluir o projeto "${projeto.nome}"? Os vínculos de membros e as faixas desse projeto também serão excluídos.`,
    );

    if (!confirmou) {
      return;
    }

    this.excluindoProjetoId.set(projeto.id);
    this.erroOperacao.set(null);

    try {
      await this.dadosProjetos.excluirProjeto(projeto.id);

      if (this.projetoEditandoId() === projeto.id) {
        this.limparFormularioProjeto();
      }

      if (this.projetoMembroId() === projeto.id) {
        this.fecharFormularioMembro();
      }

      if (this.projetoSelecionadoId() === projeto.id) {
        this.projetoSelecionadoId.set(
          this.dadosProjetos.projetos()[0]?.id ?? null,
        );
      }
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.excluindoProjetoId.set(null);
    }
  }

  async enviarCapa(
    projeto: ProjetoArtisticoCompleto,
    evento: Event,
  ): Promise<void> {
    const input = evento.target as HTMLInputElement;
    const arquivo = input.files?.item(0) ?? null;

    if (!arquivo) {
      return;
    }

    this.enviandoCapaId.set(projeto.id);
    this.erroOperacao.set(null);

    try {
      await this.dadosProjetos.enviarCapa(projeto.id, arquivo);
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      input.value = "";
      this.enviandoCapaId.set(null);
    }
  }

  async removerCapa(projeto: ProjetoArtisticoCompleto): Promise<void> {
    if (!projeto.capa_caminho) {
      return;
    }

    const confirmou = window.confirm(`Remover a capa de "${projeto.nome}"?`);

    if (!confirmou) {
      return;
    }

    this.removendoCapaId.set(projeto.id);
    this.erroOperacao.set(null);

    try {
      await this.dadosProjetos.removerCapa(projeto.id);
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.removendoCapaId.set(null);
    }
  }

  abrirNovoMembro(projetoId: string): void {
    this.projetoSelecionadoId.set(projetoId);
    this.projetoMembroId.set(projetoId);
    this.membroEditandoId.set(null);
    this.erroOperacao.set(null);

    this.formularioMembro.reset({
      contato_id: "",
      papel: "",
      ativo: true,
    });
  }

  editarMembro(projetoId: string, membro: MembroProjetoCompleto): void {
    this.projetoSelecionadoId.set(projetoId);
    this.projetoMembroId.set(projetoId);
    this.membroEditandoId.set(membro.id);
    this.erroOperacao.set(null);

    this.formularioMembro.setValue({
      contato_id: membro.contato_id,
      papel: membro.papel,
      ativo: membro.ativo,
    });
  }

  async salvarMembro(projetoId: string): Promise<void> {
    if (this.formularioMembro.invalid) {
      this.formularioMembro.markAllAsTouched();
      return;
    }

    this.salvandoMembro.set(true);
    this.erroOperacao.set(null);

    try {
      const valor = this.formularioMembro.getRawValue();

      const dados: CadastroMembroProjeto = {
        contato_id: valor.contato_id,
        papel: valor.papel,
        ativo: valor.ativo,
      };

      const membroId = this.membroEditandoId();

      if (membroId) {
        await this.dadosProjetos.atualizarMembro(membroId, dados);
      } else {
        await this.dadosProjetos.adicionarMembro(projetoId, dados);
      }

      this.fecharFormularioMembro();
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoMembro.set(false);
    }
  }

  fecharFormularioMembro(): void {
    this.projetoMembroId.set(null);
    this.membroEditandoId.set(null);

    this.formularioMembro.reset({
      contato_id: "",
      papel: "",
      ativo: true,
    });
  }

  async removerMembro(membro: MembroProjetoCompleto): Promise<void> {
    const confirmou = window.confirm(
      `Remover "${membro.contato.nome}" deste projeto?`,
    );

    if (!confirmou) {
      return;
    }

    this.excluindoMembroId.set(membro.id);
    this.erroOperacao.set(null);

    try {
      await this.dadosProjetos.removerMembro(membro.id);

      if (this.membroEditandoId() === membro.id) {
        this.fecharFormularioMembro();
      }
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.excluindoMembroId.set(null);
    }
  }

  private limparFormularioProjeto(): void {
    this.projetoEditandoId.set(null);
    this.formularioProjetoVisivel.set(false);

    this.formularioProjeto.reset({
      nome: "",
      tipo: "solo",
    });
  }

  private obterMensagemErro(erro: unknown): string {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }

    return "Não foi possível concluir a operação.";
  }
}
