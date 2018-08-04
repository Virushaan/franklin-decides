import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  options = ["../../assets/icon-knife.png", "../../assets/icon-spoon.png",
            "../../assets/icon-fork.png", "../../assets/icon-chef.png",
            "../../assets/icon-mug.png", "../../assets/icon-bowl.png"];
  images = [null, null, null, null, null, null];

  width;
  height;
  offset;
  speed;
  arc;
  r;
  drawing;
  winner;
  franklin = null;
  happy_franklin = null;
  ctx: CanvasRenderingContext2D;

  @ViewChild('canvas') canvas: ElementRef;


  ellipse(ctx, width, height) {
    ctx.beginPath();
    ctx.ellipse(this.width/2, this.height/2, width, height, 0, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  spinMe() {
    this.speed = Math.random() * 0.4 + 0.4;
    this.drawing = true;
    this.winner = -1;
  }

  sector(ctx, width, height, start, end) {
    ctx.beginPath();
    ctx.ellipse(this.width/2, this.height/2, width, height, 0, start, end, false);
    ctx.lineTo(this.width/2, this.height/2);
    ctx.fill();
    // ctx.stroke();
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
    let x = this.width/2 + 0.675 * this.r * Math.cos(angle)
    let y = this.height/2 + 0.675 * this.r * Math.sin(angle);
    this.ctx.fillStyle = "#00aad4";
    this.bubble(this.ctx, x, y, 0.22 * this.r, 0.22 * this.r);
    if (this.images[i]) {
      if (this.winner == i) {
        this.ctx.drawImage(this.images[i], x - this.r * 0.25, y - this.r * 0.25,
          this.r * 0.5, this.r * 0.5);
      } else {
        this.ctx.drawImage(this.images[i], x - this.r * 0.22, y - this.r * 0.22,
          this.r * 0.44, this.r * 0.44);
      }
    }
  }

  drawOnce() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // this.ctx.fillStyle = "black";
    // this.ellipse(this.ctx, this.r, this.r);
    this.ctx.fillStyle = "white";
    this.ellipse(this.ctx, this.r-5, this.r-5);

    for (let i = 0; i < this.options.length; i++) {
      this.ctx.fillStyle = (i % 2) ? "#f0f0f0" : "#fff";
      // this.ctx.strokeStyle = "#ccc";
      this.ctx.lineWidth = 2;
      this.drawSector(i);
    }

    // White border
    this.ctx.fillStyle = "white";
    this.ellipse(this.ctx, this.r * 0.4 - 3, this.r * 0.4 - 3);

    // Pointer
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 4;
    this.ctx.lineCap = "butt";
    this.ctx.fillStyle = "#00aad4";
    this.ctx.beginPath();
    this.ctx.moveTo(this.width * 0.46, this.height * 0.67);
    this.ctx.lineTo(this.width/2, this.height * 0.72);
    this.ctx.lineTo(this.width * 0.54, this.height * 0.67);
    this.ctx.stroke();
    this.ctx.fill();

    // Blue circle
    this.ctx.fillStyle = "#00aad4";
    this.ellipse(this.ctx, this.r * 0.4 - 6, this.r * 0.4 - 6);

    // Draw Franklin
    if (this.winner !== -1) {
      if (this.happy_franklin)
        this.ctx.drawImage(this.happy_franklin,
          this.width/2 - this.r * 0.225, this.height/2 - this.r * 0.225,
          this.r * 0.45, this.r * 0.45);
    } else {
      if (this.franklin)
        this.ctx.drawImage(this.franklin,
          this.width/2 - this.r * 0.22, this.height/2 - this.r * 0.22,
          this.r * 0.44, this.r * 0.44);
    }

  }

  drawLoop() {
    this.drawOnce();

    if (this.speed > 0) {
      this.speed -= this.speed * 0.01 * (Math.random() * 0.3 + 0.7) + 0.0003;
      this.offset += this.speed;
      if (this.offset > 2 * Math.PI) {
        this.offset -= 2 * Math.PI;
      }
    } else {
      if (this.drawing) {
        for (let i = 0; i < this.options.length; i++) {
          let lo = this.offset + this.arc * i;
          let hi = this.offset + this.arc * (i + 1);
          if ((lo < 0.5 * Math.PI && hi > 0.5 * Math.PI)
          || (lo < 2.5 * Math.PI && hi > 2.5 * Math.PI)
          || (lo < 4.5 * Math.PI && hi > 4.5 * Math.PI)) {
            this.winner = i;
            break;
          }
        }
      }
      this.drawing = false;
    }
    window.requestAnimationFrame(this.drawLoop.bind(this));
  }

  ngOnInit() {

    this.drawing = false;

    this.width = this.canvas.nativeElement.width;
    this.height = this.canvas.nativeElement.height;
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.offset = 0;

    this.arc = 2 * Math.PI / this.options.length;
    this.r = this.width/2.1;

    function imageSetter(parent, array, i, img) {
      return function() {
        array[i] = img;
        parent.drawOnce();
      }
    }

    for (let i = 0; i < this.options.length; i++) {
      var img = new Image();
      img.onload = imageSetter(this, this.images, i, img);
      img.src = this.options[i];
    }

    var img = new Image();
    img.onload = (function(parent) {
      return function() {
        parent.franklin = img;
      }
    })(this);
    img.src = '../../assets/franklil.png';
    var img2 = new Image();
    img2.onload = (function(parent) {
      return function() {
        parent.happy_franklin = img2;
      }
    })(this);
    img2.src = '../../assets/franklil-happy.png';

    this.drawLoop();
  }
}
