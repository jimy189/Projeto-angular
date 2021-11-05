import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursosService } from '../services/cursos.service';
import { FavoritosService } from '../services/favoritos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {
  public dadosCurso;
  public dadosFavoritos;
  public tituloProx = 'Próximos cursos';
  public tituloFav = 'Favoritos';

  totalLikes = 0;

  constructor(private cursosService: CursosService, private favoritosService: FavoritosService) { }

  ngOnInit() {
    // Vai chamar todos os curso ao iniciar
    this.cursosService.getCursos().subscribe(dados => this.dadosCurso = dados);
    this.cursosService.cursoCurtido.subscribe((curso: Curso) => {console.log(curso); this.totalLikes++; });
    this.cursosService.favoritarCurso.subscribe((curso: Curso) => {
      this.favoritosService.add(curso);
      this.dadosFavoritos = this.favoritosService.getMeusFavoritos();
     console.log(curso);
    });
  }
}
