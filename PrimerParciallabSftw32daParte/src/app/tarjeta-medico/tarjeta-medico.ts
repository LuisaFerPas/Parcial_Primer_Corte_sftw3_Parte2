import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Medico } from '../../models/Medico';

@Component({
  selector: 'app-tarjeta-medico',
  templateUrl: './tarjeta-medico.html',
  styleUrls: ['./tarjeta-medico.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.None, // Permitir que las clases de Bootstrap se apliquen
})
export class TarjetaMedico {
 @Input() medico!: Medico;
}
