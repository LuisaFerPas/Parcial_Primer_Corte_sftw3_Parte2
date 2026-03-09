import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-barra',
  imports: [],
  templateUrl: './nav-barra.html',
  styleUrl: './nav-barra.css',
})
export class NavBarra {

  public menuItems: string[] = ['Inicio', 'Promociones', 'Medicos','Registrarse' ,'Contacto'];

}
