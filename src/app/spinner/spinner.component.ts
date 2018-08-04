import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  options = ["Test1", "Test2", "Test3", "Test4", "Test5", "Test6", "Test7"];
  width;
  height;
  offset;
  speed;
  arc;
  r;
  ctx: CanvasRenderingContext2D;

  colors = [];

  @ViewChild('canvas') canvas: ElementRef;


  ellipse(ctx, width, height) {
    ctx.beginPath();
    ctx.ellipse(this.width/2, this.height/2, width, height, 0, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  spinMe() {
    this.speed = Math.random() * 0.4 + 0.4;
  }

  sector(ctx, width, height, start, end) {
    ctx.beginPath();
    ctx.ellipse(this.width/2, this.height/2, width, height, 0, start, end, false);
    ctx.lineTo(this.width/2, this.height/2);
    // ctx.fill();
    ctx.stroke();
  }

  bubble(ctx, x, y, width, height) {
    ctx.beginPath();
    ctx.ellipse(x, y, width, height, 0, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  drawSector(i) {
    this.sector(this.ctx, this.r-5, this.r-5,
      this.offset + i * this.arc, this.offset + (i + 1) * this.arc);
    let angle = this.offset + (i + 1/2) * this.arc;
    let x = this.width/2 + 164 * Math.cos(angle)
    let y = this.height/2 + 164 * Math.sin(angle);
    this.ctx.fillStyle = "red";
    this.bubble(this.ctx, x, y, 55, 55);
  }

  drawLoop() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.ctx.fillStyle = "black";
    this.ellipse(this.ctx, this.r, this.r);
    this.ctx.fillStyle = "white";
    this.ellipse(this.ctx, this.r-5, this.r-5);

    for (let i = 0; i < this.options.length; i++) {
      //this.ctx.fillStyle = this.colors[i];
      this.ctx.fillStyle = "white";
      // this.ctx.strokeStyle = this.colors[i];
      this.ctx.strokeStyle = "#ccc";
      this.ctx.lineWidth = "2";
      this.drawSector(i);
    }

    if (this.speed > 0) {
      this.speed -= this.speed * 0.01 * (Math.random() * 0.3 + 0.7) + 0.0003;
      this.offset += this.speed;
    }

    window.requestAnimationFrame(this.drawLoop.bind(this));
  }

  ngOnInit() {

    this.width = this.canvas.nativeElement.width;
    this.height = this.canvas.nativeElement.height;
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.offset = 0;

    this.arc = 2 * Math.PI / this.options.length;
    this.r = this.width/2.1;

    for (let i = 0; i < this.options.length; i++) {
      this.colors.push('hsl(' + Math.floor(i / this.options.length * 360) + ', 100%, 70%)');
    }

    this.drawLoop();
  }
}
