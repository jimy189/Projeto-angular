import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public cursosData = [
      new Curso('JavaScript', 'Desenvolvimento', 30, '#', '27 Abr'),
      new Curso('TypeScript', 'Desenvolvimento', 30, '#', '10 Abr'),
      new Curso('Angular', 'Desenvolvimento', 50, '#', '30 Ago'),
      new Curso('React.js', 'Desenvolvimento', 60, '#', '10 Out'),
    ];

  constructor() { }

  ngOnInit() {
  }

}
