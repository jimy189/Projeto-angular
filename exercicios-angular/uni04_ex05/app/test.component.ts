import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `<article class="course presencial">
                <div class="card">
                    <div class="card-block">
                      <h1>Nome do curso: {{nomeCurso}}</h1>
                      <p class="spots">Quantidade de vagas: {{vagas}}</p>
                      <p [ngSwitch]="vagas">
                        <span *ngSwitchCase="3" class="alert">Últimas vagas</span>
                        <span *ngSwitchCase="2" class="alert">Últimas vagas</span>
                        <span *ngSwitchCase="1" class="alert">Apenas uma vaga!</span>
                        <span *ngSwitchCase="0" class="alert">Vagas esgotadas</span>
                      </p>

                      <h3>Requisitos basicos</h3>
                      <ul class="requirements">
                        <li *ngFor="let requisito of requisitos">{{requisito}}</li>
                      </ul>
                      <button class="btn" (click)="matricularAluno()">Matricular</button>
                    </div>
                </div>
              </article>`
})

export class TestComponent {
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
