import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';
import { CursosItemComponent } from './cursos/cursos-item/cursos-item.component';

@NgModule({
  declarations: [AppComponent, CursosComponent, CursosListaComponent, CursosItemComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
