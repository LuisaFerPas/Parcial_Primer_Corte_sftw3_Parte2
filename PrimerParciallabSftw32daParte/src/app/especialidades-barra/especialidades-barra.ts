import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor y keyvalue

interface Especialidad {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-especialidades-barra',
  templateUrl: './especialidades-barra.html',
  styleUrls: ['./especialidades-barra.css'],
  standalone: true, 
  imports: [CommonModule] 
})
export class EspecialidadesBarra {
  title: string = 'Especialidades Médicas';

  // Inicializa directamente con todas las especialidades
  public especialidades: Record<string, Especialidad> = {
    cardiologia: {
      nombre: "Cardiología",
      descripcion: "La cardiología es la especialidad médica dedicada al diagnóstico y tratamiento de enfermedades del corazón y del sistema circulatorio"
    },
    pediatria: {
      nombre: "Pediatría",
      descripcion: "La pediatría se enfoca en la salud integral de los niños, desde recién nacidos hasta adolescentes."
    },
    dermatologia: {
      nombre: "Dermatología",
      descripcion: "Especialidad que trata las enfermedades de la piel, cabello y uñas."
    },
    fisioterapia: {
      nombre: "Fisioterapia",
      descripcion: "La fisioterapia utiliza técnicas de movimiento y ejercicio para recuperar la función física después de lesiones o enfermedades."
    },
    nutricion: {
      nombre: "Nutrición y Dietética Terapéutica",
      descripcion: "Proporcionamos planes nutricionales personalizados para mejorar la salud y el bienestar."
    },
    quiropraxia: {
      nombre: "Quiropraxia",
      descripcion: "La quiropraxia se dedica al diagnóstico y tratamiento de trastornos del sistema musculoesquelético, especialmente de la columna vertebral."
    },
    "terapia-neural": {
      nombre: "Terapia Neural",
      descripcion: "La terapia neural es una técnica reguladora que normaliza el sistema nervioso. Se utiliza para tratar diversos problemas de salud crónica y aguda mediante inyecciones en puntos específicos."
    },
    todas: {
      nombre: "Todas las Especialidades",
      descripcion: "En Clínica Piedra Azul contamos con un equipo multidisciplinario de profesionales de la salud para atender tus necesidades médicas integrales."
    }
  };

  // Propiedad que mantiene la especialidad activa
  selectedEspecialidad: string = 'todas';

  // Método para seleccionar especialidad
  selectEspecialidad(key: string) {
    this.selectedEspecialidad = key;
    console.log('Especialidad seleccionada:', key); 
  }
}