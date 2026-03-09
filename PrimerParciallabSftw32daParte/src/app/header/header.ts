import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {

  public title: string = 'Medicina alternativa clinica Piedra Azul';
  public subtitle: string = 'Tu bienestar es nuestra prioridad';
  public description: string = 'Bienvenidos a nuestra clínica de medicina alternativa, donde nos dedicamos a brindar atención integral y personalizada para mejorar tu bienestar. ';

}
