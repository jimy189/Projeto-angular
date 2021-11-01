import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="course-list">
      <app-curso></app-curso>
      <app-curso></app-curso>
      <app-curso></app-curso>
    </div>
  </div>`,
})

export class AppComponent { }
