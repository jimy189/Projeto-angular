import { Component } from "@angular/core";

@Component({
  selector: 'app-test',
  template: '<div class="course"><h1> Nome do curso: {{nomeCurso}}</h1> <h2>Quantidade de Vagas: {{vagas}}</h2></div>'
})

export class TestComponent {
  //O recurso da vinculação de dados como data binding
    nomeCurso = 'Angular 5';
    vagas = 10;
}

