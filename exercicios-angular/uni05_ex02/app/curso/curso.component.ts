import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html'
})

export class CursoComponent {
    nomeCurso: string;
    vagas: number;
    requisitos: Array<string>;

    constructor() {
        this.nomeCurso = 'Angular';
        this.vagas = 10;
        this.requisitos = ['HTML', 'CSS', 'JavaScript', 'TypeScript'];
    }

    matricularAluno() {
        if (this.vagas > 0) {
            this.vagas--;
        }
    }
}
