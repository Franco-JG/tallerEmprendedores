import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import { CursoCartaComponent } from './curso-carta/curso-carta.component';
import { LoginComponent } from './login/login.component';
import { CursoComponent } from './curso/curso.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MiAprendizajeComponent } from './mi-aprendizaje/mi-aprendizaje.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainComponent,
    CursoCartaComponent,
    LoginComponent,
    CursoComponent,
    NotFoundComponent,
    MiAprendizajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
