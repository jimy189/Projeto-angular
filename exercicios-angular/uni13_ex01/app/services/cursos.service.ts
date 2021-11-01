import { Injectable, EventEmitter } from '@angular/core';
import { Curso } from '../cursos/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  public cursoCurtido = new EventEmitter<Curso>();
  public favoritarCurso = new EventEmitter<Curso>();

  private cursos = [];

  constructor() { }

  public getCursos() {
    return this.cursos.slice();
  }

  public getCurso(id: number) {
    return this.cursos.find(curso => curso.id === id);
  }
}
