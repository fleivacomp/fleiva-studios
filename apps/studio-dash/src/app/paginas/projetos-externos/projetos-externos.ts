import { RouterLink } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';

import { DadosProjetosExternos } from "@fleiva-studios/shared-data-access";

@Component({
  selector: 'app-projetos-externos',
  standalone: true,
  templateUrl: './projetos-externos.html',
  styleUrl: './projetos-externos.scss',
  imports: [RouterLink],
})
export class ProjetosExternos implements OnInit {

  readonly dadosProjetos = inject(DadosProjetosExternos);

  ngOnInit(): void {
    void this.dadosProjetos.listar();
  }

}
