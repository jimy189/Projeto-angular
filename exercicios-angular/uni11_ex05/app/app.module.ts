import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';
import { CursosItemComponent } from './cursos/cursos-item/cursos-item.component';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'cursos', component: CursosComponent},
  { path: '',
    redirectTo: '/cursos',
    pathMatch: 'full'
  },
  { path: 'sobre', component: SobreComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [AppComponent, CursosComponent,
    CursosListaComponent, CursosItemComponent,
    SobreComponent, MainComponent, NavigationComponent, NotFoundComponent],
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
