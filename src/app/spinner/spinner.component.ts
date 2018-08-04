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
  jumpno;
  speed;
  arc;
  r;
  drawing;
  winner;
  franklin_body = null;
  franklin_eyes = null;
  franklin_dizzy = null;
  franklin_happy = null;

  ctx: CanvasRenderingContext2D;

  @ViewChild('canvas') canvas: ElementRef;


  ellipse(ctx, width, height) {
    ctx.beginPath();
    ctx.ellipse(this.width/2, this.height/2, width, height, 0, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  spinMe() {
    this.speed = Math.random() * 0.85 + 0.4;
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

  drawSector(i, offset) {
    this.sector(this.ctx, this.r-5, this.r-5,
      i * this.arc, (i + 1) * this.arc);
    let angle = (i + 1/2) * this.arc;
    let scaler = this.arc
      - Math.min(Math.abs(angle - (offset + 2 * Math.PI)),
                 Math.abs(angle - offset),
                 Math.abs(angle - (offset - 2 * Math.PI))) * 0.8;
    scaler /= this.arc;
    if (scaler < 0) {
      scaler = 0;
    }
    this.ctx.fillStyle = "#00aad4";
    let scale = 0.22 + scaler * 0.06;
    this.bubble(this.ctx, x, y, this.r * scale, this.r * scale);
    let x = this.width/2 + 0.675 * this.r * Math.cos(angle)
    let y = this.height/2 + 0.675 * this.r * Math.sin(angle);
    if (this.images[i]) {
      this.ctx.drawImage(this.images[i], x - this.r * scale, y - this.r * scale,
        this.r * scale * 2, this.r * scale * 2);
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
      this.drawSector(i, this.offset);
    }

    // White border
    this.ctx.fillStyle = "white";
    this.ellipse(this.ctx, this.r * 0.4 - 3, this.r * 0.4 - 3);

    // Pointer
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 5.5;
    this.ctx.lineCap = "butt";
    this.ctx.fillStyle = "#00aad4";
    this.ctx.beginPath();
    let innerRadius = this.r * 0.36;
    let outerRadius = this.r * 0.5;
    let angle = this.offset;
    this.ctx.moveTo(Math.cos(angle - 0.2) * innerRadius + this.width/2,
                    Math.sin(angle - 0.2) * innerRadius + this.height/2);
    this.ctx.lineTo(Math.cos(angle) * outerRadius + this.width/2,
                    Math.sin(angle) * outerRadius + this.height/2);
    this.ctx.lineTo(Math.cos(angle + 0.2) * innerRadius + this.width/2,
                    Math.sin(angle + 0.2) * innerRadius + this.height/2);
    this.ctx.stroke();
    this.ctx.fill();

    // Blue circle
    this.ctx.fillStyle = "#00aad4";
    this.ellipse(this.ctx, this.r * 0.4 - 6, this.r * 0.4 - 6);

    // Draw Franklin
    let scale = 0.22;
    if (this.winner !== -1) {
      if (this.franklin_happy) {
        let height = this.jumpno * (20 - this.jumpno) / 14;
        if (height < 0) {
          height = 0;
        }
        this.ctx.drawImage(this.franklin_happy,
          this.width/2 - this.r * scale, this.height/2 - this.r * scale - height,
          this.r * scale * 2, this.r * scale * 2);
      }
    } else {
      if (this.franklin_body) {
        this.ctx.drawImage(this.franklin_body,
          this.width/2 - this.r * scale, this.height/2 - this.r * scale,
          this.r * scale * 2, this.r * scale * 2);
        let radius = this.r * 0.01;
        let scale2 = 0.95 * scale;
        if (this.speed < 0.7 && this.speed > 0.35) {
          if (this.franklin_dizzy) {
            radius *= 0.3;
            this.ctx.drawImage(this.franklin_dizzy,
              this.width/2 - this.r * scale2 + radius * Math.cos(this.offset), // x
              this.height/2 - this.r * scale2 + radius * Math.sin(this.offset), // y
              this.r * scale2 * 2, this.r * scale2 * 2); // width, height
          }
        } else {
          if (this.franklin_eyes) {
            this.ctx.drawImage(this.franklin_eyes,
              this.width/2 - this.r * scale2 + radius * Math.cos(this.offset), // x
              this.height/2 - this.r * scale2 + radius * Math.sin(this.offset), // y
              this.r * scale2 * 2, this.r * scale2 * 2); // width, height
          }
        }
      }
    }
  }

  drawLoop() {
    this.drawOnce();

    if (this.speed > 0) {
      this.speed -= this.speed * 0.012 * (Math.random() * 0.3 + 0.7) + 0.0004;
      this.offset += this.speed;
      if (this.offset > 2 * Math.PI) {
        this.offset -= 2 * Math.PI;
      }
    } else {
      if (this.drawing) {
        this.winner = Math.floor(this.offset / this.arc);
        this.jumpno = 0;
      }
      if (this.winner >= 0) {
        let angle = this.arc * (this.winner + 1/2);
        this.offset += (angle - this.offset) * 0.1;
        this.drawing = false;
        this.jumpno += 1;
      }
    }
    window.requestAnimationFrame(this.drawLoop.bind(this));
  }

  ngOnInit() {

    this.winner = -1;

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

    function loadImage(onload, src) {
      var img = new Image();
      img.onload = onload(img);
      img.src = src;
    }

    loadImage((function(img) {this.franklin_body = img}).bind(this), '../../assets/franklil-noeyes.png');
    loadImage((function(img) {this.franklin_eyes = img}).bind(this), '../../assets/franklil-eyes.png');
    loadImage((function(img) {this.franklin_dizzy = img}).bind(this), '../../assets/franklil-dizzy-eyes.png');
    loadImage((function(img) {this.franklin_happy = img}).bind(this), '../../assets/franklil-happy.png');

    this.drawLoop();
  }
}
