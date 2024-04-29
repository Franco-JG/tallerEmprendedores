import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-aprendizaje',
  templateUrl: './mi-aprendizaje.component.html',
  styleUrls: ['./mi-aprendizaje.component.css']
})
export class MiAprendizajeComponent {
  numCursos: number[] = Array(10).fill(0).map((_, index) => index + 1);
}
