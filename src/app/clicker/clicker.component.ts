import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit, AfterViewInit {

  @ViewChild('clicker') clicker!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const canvas = this.clicker.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    const width = canvas.width;
    const height = canvas.height;
    // Draw a rectangle
    this.ctx.fillStyle = '#333';
    this.ctx.fillRect(0, 0, width, height);
    console.log(`dimensions: (${width}, ${height})`);
    // Draw a circle
    this.ctx.beginPath();
    this.ctx.arc(233, 74, 40, 0, 2 * Math.PI);
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
     canvas.addEventListener('click', this.onCanvasClick.bind(this));
  }
  onCanvasClick(event: MouseEvent): void {
    const canvas = this.clicker.nativeElement;
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
    this.ctx.beginPath();
    this.ctx.arc(canvasX, canvasY, 5, 0, 2 * Math.PI);
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
  }
}
