import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  constructor() { }

  @ViewChild('canvas') canvas: ElementRef;

  test() {
    console.log(this.canvas)
    let ctx: CanvasRenderingContext2D;
    ctx = this.canvas.nativeElement.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(20, 50, 80, 100)
  }


}
