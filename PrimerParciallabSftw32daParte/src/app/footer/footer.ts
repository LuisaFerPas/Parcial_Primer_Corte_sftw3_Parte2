import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  standalone: true,
  imports: [CommonModule]
})
export class FooterComponent {
  
  public anioActual: number = new Date().getFullYear(); 
  public direccion: string = 'CCHJ+68, Popayán, Cauca (Via al Huila)';
  
}