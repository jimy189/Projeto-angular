import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private meusFavoritos = [];

  constructor() { }

  getMeusFavoritos() {
    this.meusFavoritos.slice();
  }
}
