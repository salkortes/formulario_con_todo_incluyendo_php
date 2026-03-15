// Primero de todo, declaramos las consts con las que vamos a trabajar más abajo

const formulario = document.querySelector('#formulario');
const inputUsuario = document.querySelector('#usuario');
const inputDni = document.querySelector('#dni');
const inputEmail = document.querySelector('#email');
const inputEdad = document.querySelector('#edad');
const inputPais = document.querySelector('#pais');
const inputPassword = document.querySelector('#password');
const inputTerminos = document.querySelector('#terminos');

//  Declaramos las Expresiones regulares
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const regexUsuario = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]{4,12}$/
const regexDni = /^[0-9]{8}[A-Z]$/
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


//Y a partir de aquí, ya hacemos las funciones.

/* Función que muestra un error*/
function mostrarError(campo, mensaje) {
  campo.classList.add('error');
  const error = document.createElement('div');
  error.className = 'mensaje-error';
  error.textContent = mensaje;
  campo.after(error);
}

/*Función que limpia de errores cuando se solventa el problema */
function limpiarErrores() {
  document.querySelectorAll('.error').forEach(campo => campo.classList.remove('error'));
  document.querySelectorAll('.mensaje-error').forEach(msg => msg.remove());
}


/* Cuando se envia el formulario... evitaremos que se envie por defecto y comprobaremos que todo esté ok! */
formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  limpiarErrores();

  let siquehayError = false;

  //  Validamos que nombre esté relleno y tenga una longitud de , mínimo, 3 caracteres
  if (!regexUsuario.test(inputUsuario.value.trim())) {
    mostrarError(inputUsuario, 'Revisa el usuario, tiene algo que no es correcto');
    siquehayError = true;
  }

  // Email obligatorio y formato correcto, con su arroba.
  if (!regexEmail.test(inputEmail.value.trim())) {
    mostrarError(inputEmail, 'El correo no tiene un formato válido');
    siquehayError = true;
  }

  if (inputEdad.value < 18 || inputEdad.value > 120) {
    mostrarError (inputEdad , ' Hay un error con la edad. Nada de menores ni de mayores de 120 años! ');
    siquehayError = true;

 }
   if (inputPais.value === "" ) { /* Es "" porque es una select! */ 
    mostrarError (inputPais , 'No has marcado país. Es obligatorio!');
    siquehayError = true;
 }

    // DNI obligatorio y con su formato ok //
  if (!regexDni.test(inputDni.value.trim())) {
    mostrarError(inputDni, 'El dni no tiene un formato válido');
    siquehayError = true;
  }
    // Contrasñea también con su longitud y complejidad correctas//
  if (!regexPassword.test(inputPassword.value.trim())) {
    mostrarError(inputPassword, 'La contraseá no es lo suficientemente larga, segura, o no tiene un formato válido');
    siquehayError = true;
  }


  if (!inputTerminos.checked) {
    alert('Debes aceptar los términos y condiciones');
    siquehayError = true;
  }

  // Si hay errores, no se envía y se vuelve al paso anterior
  if (siquehayError) return;

  // Si todo está bien, mensaje de conformidad
  alert('Formulario enviado correctamente, genial!');
  formulario.reset();
};