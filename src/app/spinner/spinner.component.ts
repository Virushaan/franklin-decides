import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @ViewChild('canvas') canvas: ElementRef;

  let options = ["Sushi", "Pizza", "Taco", "Beer", "Hungrier", "Sprite", "Watermelon", "Burrito"];
  let startAngle = 0;
  let arc = Math.PI * 2 / 8;

  test() {
    console.log(this.canvas);

  }
}
