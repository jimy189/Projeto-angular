import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent implements OnInit {
  @Input() public cursos = [];

  constructor() { }

  ngOnInit() {
  }

}
