import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})

export class CursoComponent {
    nomeCurso: string;
    vagas: number;
    requisitos: Array<string>;
    alunos = [];
    alunoAtual = '';

    constructor() {
        this.nomeCurso = 'Angular';
        this.vagas = 3;
        this.requisitos = ['HTML', 'CSS', 'JavaScript', 'TypeScript'];
    }

    matricularAluno() {
        if (this.vagas > 0) {
            this.vagas--;
            this.alunos.push(this.alunoAtual);
            this.alunoAtual = '';
        }
    }
}
