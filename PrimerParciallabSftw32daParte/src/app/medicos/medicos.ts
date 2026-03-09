import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaMedico } from '../tarjeta-medico/tarjeta-medico';
import { Medico } from '../../models/Medico';

@Component({
  selector: 'app-medicos',
  imports: [CommonModule, TarjetaMedico],
  templateUrl: './medicos.html',
  styleUrls: ['./medicos.css'],

})

export class Medicos {

  medicos: Medico[] = [
    {
      nombre: "Chin",
      apellido: "Chan Pung",
      especialidad: "Cardiología",
      motivacion: "mi corazón late por el tuyo",
      imagen: "https://images.pexels.com/photos/5722163/pexels-photo-5722163.jpeg"
    },
    {
      nombre: "Juliana",
      apellido: "Zuluaga Méndez",
      especialidad: "Pediatría",
      motivacion: "nuestra infancia es la base de nuestro futuro",
      imagen: "https://images.pexels.com/photos/5998482/pexels-photo-5998482.jpeg"
    },
    {
    nombre: "Sofía",
    apellido: "Fernández Rosales",
    especialidad: "Pediatría",
    motivacion: "Cuidando a los más pequeños con amor y dedicación",
    imagen: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg"
  },
  {
    nombre: "Carlos",
    apellido: "Ortega Caicedo",
    especialidad: "Dermatología",
    motivacion: "La piel es el reflejo de tu salud, cuidémosla juntos",
    imagen: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg"
  },
  {
    nombre: "Ana",
    apellido: "Romero Galvis",
    especialidad: "Fisioterapia",
    motivacion: "Porque el cuerpo es el vehículo de tu bienestar, mantengámoslo en movimiento",
    imagen: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
  },
  {
    nombre: "Sebastian",
    apellido: "Pinto Molano",
    especialidad: "Nutrición y Dietética",
    motivacion: "Que lo que entre por tu boca sea tu mejor medicina",
    imagen: "https://images.pexels.com/photos/6235666/pexels-photo-6235666.jpeg"
  },
  {
    nombre: "Kedan",
    apellido: "Pocos Díaz",
    especialidad: "Quiropraxia",
    motivacion: "Alineando tu cuerpo para una vida sin dolor",
    imagen: "https://images.pexels.com/photos/8376329/pexels-photo-8376329.jpeg"
  },
  {
    nombre: "Alejandra",
    apellido: "Rocha Fernández",
    especialidad: "Terapia Neural",
    motivacion: "Regulando tu sistema nervioso naturalmente",
    imagen: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg"
  }

  ];

  
}
