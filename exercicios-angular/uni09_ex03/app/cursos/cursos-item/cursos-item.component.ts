import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Curso} from '../curso';

@Component({
  selector: 'app-cursos-item',
  templateUrl: './cursos-item.component.html',
  styleUrls: ['./cursos-item.component.css']
})
export class CursosItemComponent implements OnInit {
  public counter = 0;
  @Input() curso: Curso;
  @Output() favoritou = new EventEmitter<Curso>();
  constructor() { }

  ngOnInit() {
    console.log('on init');
  }

  ngAfterContentInit() {
    console.log('content init');
  }

  favoritar() {
    this.favoritou.emit(this.curso);
  }

  curtir() {
    this.counter++;
  }
}
