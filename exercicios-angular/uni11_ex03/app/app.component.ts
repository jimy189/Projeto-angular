import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <a routerLink="/">Home</a>
    <a routerLink="/sobre">Sobre</a>
  </nav>
  <router-outlet><router-outlet>
  `,
})

export class AppComponent { }
