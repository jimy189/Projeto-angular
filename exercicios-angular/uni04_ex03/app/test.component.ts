import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `<div class="course">
                <h1>Nome do curso: {{nomeCurso}}</h1>
                <h2>Quantidade de vagas: {{vagas}} </h2>
                <button class="btn" (click)="matricularAluno()">Matricular</button>
            </div>`
})

export class TestComponent {
    nomeCurso: string;
    vagas: number;

    constructor() {
        this.nomeCurso = 'Angular';
        this.vagas = 10;
    }

    matricularAluno() {
        if (this.vagas > 0) {
            this.vagas--;
        }
    }
}
