import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';
import { CursosItemComponent } from './cursos/cursos-item/cursos-item.component';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';

const appRoutes: Routes = [
  { path: '', component: CursosComponent},
  { path: 'sobre', component: SobreComponent}
];

@NgModule({
  declarations: [AppComponent, CursosComponent,
    CursosListaComponent, CursosItemComponent, SobreComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
