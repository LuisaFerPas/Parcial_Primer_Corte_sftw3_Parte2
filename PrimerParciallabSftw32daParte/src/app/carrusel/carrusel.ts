import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  imports: [],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css',
})
export class Carrusel {

  public title: string = 'Promociones Destacadas';
  public images: string[] = [
    'https://images.pexels.com/photos/4353249/pexels-photo-4353249.jpeg',
    'https://images.pexels.com/photos/5888099/pexels-photo-5888099.jpeg',
    'https://images.pexels.com/photos/5480049/pexels-photo-5480049.jpeg'
  ];
  public promotions: string[] = [
    'Servicio de acupuntura: Alivio del estrés y mejora del bienestar',
    'Terapias de masajes: Relajación profunda y alivio muscular',
    'Medicina alternativa: Enfoques personalizados para tu salud integral'
  ];

  public descriptions: string[] = [
    'Sumérgete en la experiencia de la acupuntura, una técnica milenaria que equilibra tu energía y promueve la salud integral.',
    'Tus músculos merecen un descanso. Descubre nuestras terapias de masajes, diseñadas para aliviar tensiones y revitalizar tu cuerpo.',
    'En nuestra clínica de medicina alternativa, ofrecemos enfoques personalizados para mejorar tu bienestar'
  ];

}
