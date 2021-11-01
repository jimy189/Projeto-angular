import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public dadosCurso = [
    new Curso('JavaScript', 'Desenvolvimento', 20, 'assets/img/javascript.jpg', '30 Abr'),
    new Curso('TypeScript', 'Desenvolvimento', 40, 'assets/img/typescript.jpg', '30 Abr'),
    new Curso('Angular', 'Desenvolvimento', 60, 'assets/img/javascript.jpg', '30 Abr'),
    new Curso('React.js', 'Desenvolvimento', 20, 'assets/img/typescript.jpg', '30 Abr')
  ];
  constructor() { }

  ngOnInit() {
  }

}
