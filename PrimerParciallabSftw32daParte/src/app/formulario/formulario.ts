import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
// vamos a usar Toastify para mostrar mensajes de éxito
declare var Toastify: any;

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-formulario',
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class Formulario implements OnInit {

  // Objeto para almacenar los datos del formulario
  formData: any = {
    tipoIdentificacion: '',
    numeroIdentificacion: '',
    nombres: '',
    apellidos: '',
    correoElectronico: '',
    genero: '',
    fechaNacimiento: ''
  };

  // Objeto para almacenar los errores de validación
  errores: any = {
    tipoIdentificacion: '',
    numeroIdentificacion: '',
    nombres: '',
    apellidos: '',
    correoElectronico: '',
    genero: '',
    fechaNacimiento: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  // Método para validar campo obligatorio
  validarCampoObligatorio(campo: string, mensaje: string): boolean {
    if (!this.formData[campo] || this.formData[campo].toString().trim() === '') {
      this.errores[campo] = mensaje;
      return false;
    } else {
      this.errores[campo] = '';
      return true;
    }
  }

  // Método para validar longitud
  validarLongitud(campo: string, min: number, max: number, mensaje: string): boolean {
    const valor = this.formData[campo] || '';
    if (valor.length < min || valor.length > max) {
      this.errores[campo] = mensaje;
      return false;
    } else {
      this.errores[campo] = '';
      return true;
    }
  }

  // Método para validar correo electrónico
  validarCorreo(campo: string, mensaje: string): boolean {
    const correoRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const valor = this.formData[campo] || '';

    if (!correoRegex.test(valor)) {
      this.errores[campo] = mensaje;
      return false;
    } else {
      this.errores[campo] = '';
      return true;
    }
  }

  // Método para validar género
  validarGenero(campo: string, mensaje: string): boolean {
    if (!this.formData[campo] || this.formData[campo] === '') {
      this.errores[campo] = mensaje;
      return false;
    } else {
      this.errores[campo] = '';
      return true;
    }
  }

  // Método para mostrar mensaje de éxito con Toastify
  mostrarMensajeExito(): void {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Pausa para que el scroll se complete antes del mensaje
    setTimeout(() => {
      Toastify({
        text: "¡Registro exitoso!",
        duration: 4000,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        //voy a meter los stilos en donde van pero despues
        style: {
         background: "rgba(0, 128, 0, 0.9)",
          color: "#fff",
          padding: "15px 25px",
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
         
        },
      }).showToast();
}, 900);
  }

// Método principal que valida todo el formulario
validarFormulario(): void {

  // Validar todos los campos
  const tipoIdentificacionValida = this.validarCampoObligatorio('tipoIdentificacion', 'El tipo de identificación es obligatorio');
  const identificacionValida = this.validarCampoObligatorio('numeroIdentificacion', 'La identificación es obligatoria');
  const nombresValidos = this.validarLongitud('nombres', 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
  const apellidosValidos = this.validarLongitud('apellidos', 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');
  const correoValido = this.validarCorreo('correoElectronico', 'El correo debe tener el dominio @gmail.com');
  const generoValido = this.validarGenero('genero', 'El género es obligatorio');
  const fechaNacimientoValida = this.validarCampoObligatorio('fechaNacimiento', 'La fecha de nacimiento es obligatoria');

  // Si todas las validaciones son correctas
  if(tipoIdentificacionValida && identificacionValida && nombresValidos &&
  apellidosValidos && correoValido && generoValido && fechaNacimientoValida) {

  this.mostrarMensajeExito();

  // Scroll al formulario
  const formulario = document.getElementById('formularioContacto');
  if (formulario) {
    formulario.classList.add("was-validated");
  }

  // Resetear el formulario después de 2 segundos
  setTimeout(() => {
    this.resetFormulario();
  }, 2000);

} else {
  alert('Por favor, complete correctamente el formulario.');
}
  }

// Método para validar campos al cambiar el foco
validarCampoAlCambiarFoco(campo: string): void {
  switch(campo) {
      case 'tipoIdentificacion':
  this.validarCampoObligatorio('tipoIdentificacion', 'El tipo de identificación es obligatorio');
  break;
  case 'numeroIdentificacion':
  this.validarCampoObligatorio('numeroIdentificacion', 'El número de identificación es obligatorio');
  break;
  case 'nombres':
  this.validarLongitud('nombres', 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
  break;
  case 'apellidos':
  this.validarLongitud('apellidos', 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');
  break;
  case 'correoElectronico':
  this.validarCorreo('correoElectronico', 'El correo debe tener el dominio @gmail.com');
  break;
  case 'genero':
  this.validarGenero('genero', 'El género es obligatorio');
  break;
  case 'fechaNacimiento':
  this.validarCampoObligatorio('fechaNacimiento', 'La fecha de nacimiento es obligatoria');
  break;
}
  }

// Método para resetear el formulario
resetFormulario(): void {
  this.formData = {
    tipoIdentificacion: '',
    numeroIdentificacion: '',
    nombres: '',
    apellidos: '',
    correoElectronico: '',
    genero: '',
    fechaNacimiento: ''
  };

  // Limpiar errores
  Object.keys(this.errores).forEach(key => {
    this.errores[key] = '';
  });
}
}