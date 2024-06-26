import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

    numCards: number[] = Array(10).fill(0).map((_, index) => index + 1);
}
