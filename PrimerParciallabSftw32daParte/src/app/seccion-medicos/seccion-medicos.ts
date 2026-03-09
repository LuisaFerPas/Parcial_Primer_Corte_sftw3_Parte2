import { Component } from '@angular/core';
import { Medicos } from '../medicos/medicos';
import { EspecialidadesBarra } from '../especialidades-barra/especialidades-barra';

@Component({
  selector: 'app-seccion-medicos',
  imports: [EspecialidadesBarra, Medicos],
  templateUrl: './seccion-medicos.html',
  styleUrl: './seccion-medicos.css',
})
export class SeccionMedicos {

}
