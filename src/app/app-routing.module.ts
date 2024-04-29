import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CursoComponent } from './curso/curso.component';
import { MiAprendizajeComponent } from './mi-aprendizaje/mi-aprendizaje.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'inicio',
    component: MainComponent
  },
  {
    path: 'inicio/curso',
    component: CursoComponent
  },
  {
    path: 'mis-cursos',
    component: MiAprendizajeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
