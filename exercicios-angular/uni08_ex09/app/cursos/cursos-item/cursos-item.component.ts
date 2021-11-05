import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-item',
  templateUrl: './cursos-item.component.html',
  styleUrls: ['./cursos-item.component.css']
})
export class CursosItemComponent implements OnInit {
  @Input() public curso: Curso;

  constructor() { }

  ngOnInit() {
  }

}
