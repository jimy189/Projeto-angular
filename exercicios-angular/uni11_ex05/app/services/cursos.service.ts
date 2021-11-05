import { Injectable, EventEmitter } from '@angular/core';
import { Curso } from '../cursos/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  public cursoCurtido = new EventEmitter<Curso>();
  public favoritarCurso = new EventEmitter<Curso>();

  private cursos = [
    new Curso('JavaScript', 'Desenvolvimento', 20, 'assets/img/typescript.jpg', '30 Abr'),
    new Curso('TypeScript', 'Desenvolvimento', 40, 'assets/img/typescript.jpg', '20 Abr'),
    new Curso('Angular', 'Desenvolvimento', 60, 'assets/img/javascript.jpg', '10 Abr'),
    new Curso('React.js', 'Desenvolvimento', 20, 'assets/img/typescript.jpg', '02 Abr')
  ];
  constructor() { }

  public getCursos() {
    return this.cursos.slice();
  }
}
