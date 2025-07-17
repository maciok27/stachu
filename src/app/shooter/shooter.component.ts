import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.css']
})
export class ShooterComponent implements OnInit, AfterViewInit {

  @ViewChild('shooter') shooter!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private x = 0;
  private y = 50;
  private img = new Image();
  private width = 0;
  private height = 0;
  private  canvas = this.shooter.nativeElement;
  Objects = [
  { "id": 0, "type": 0, "row": 0, "img": new Image()},
  ];
  constructor() { }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.resizeCanvas(); // Set initial size
    this.canvas = this.shooter.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;

    const width = this.canvas.width;
    const height = this.canvas.height;
  }
  @HostListener('window:resize', [])
  onResize() {
    this.resizeCanvas();
    this.animate(); // Optional: redraw on resize
  }
  animate() {
    this.ctx.clearRect(0, 0, 600, 300); // clear canvas

    this.ctx.drawImage(this.img, this.x, this.y, 100, 100); // draw image
    this.ctx.fillStyle = '#333';
    this.ctx.fillRect(0, 0, this.width, this.height);
    console.log(`dimensions: (${this.width}, ${this.height})`);
    this.canvas.addEventListener('click', this.onCanvasClick.bind(this));
    this.x += 2; // move image to the right

    if (this.x > 600) this.x = -100; // reset if off screen

    requestAnimationFrame(() => this.animate()); // call again for next frame
  }
  resizeCanvas() {
    const canvas = this.shooter.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.width = canvas.width;
    this.height = canvas.height;
  }
  onCanvasClick(event: MouseEvent): void {
    const canvas = this.shooter.nativeElement;
    const rect = canvas.getBoundingClientRect();

    console.log(`rect: (${rect.left}, ${rect.top})`);
    // Calculate click coordinates relative to canvas top-left
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Scale mouse coordinates to the canvas's coordinate system
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const canvasX = x * scaleX;
    const canvasY = y * scaleY;
    console.log(`Clicked at: (${x}, ${y})`);

    // Example: draw a small red circle where clicked
   
    this.Objects.forEach(element => {
    if (
      canvasX >= element.img.x &&
      canvasX <= element.img.x + element.img.width &&
      canvasY >= element.img.y &&
      canvasY <= element.img.y + element.img.height
    ) {
      console.log("Click is inside the rectangle!");
        this.ctx.beginPath();
        this.ctx.arc(canvasX, canvasY, 5, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
    }
    });
    
  }
}
