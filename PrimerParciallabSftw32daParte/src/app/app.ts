import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Carrusel } from './carrusel/carrusel';
import { NavBarra } from './nav-barra/nav-barra'; 
import { SeccionMedicos } from './seccion-medicos/seccion-medicos';
import {Formulario} from './formulario/formulario';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer';


@Component({
  selector: 'app-root',
  imports: [Header, Carrusel, NavBarra, SeccionMedicos, Formulario, CommonModule, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'PrimerParciallabSftw32daParte';
}
