var intentos = 0;
var intentosElemento = document.getElementById("intentos");
function verificarRespuesta(respuestaSeleccionada) {

    var respuestaCorrecta = "opcion4";
    var imagen = document.getElementById("imagen");
    var mensaje = document.getElementById("mensaje");

    var titulo = document.getElementById("titulo");

  



    if (respuestaSeleccionada == respuestaCorrecta) {

        intentos++;

        imagen.src = "../img/pcolor.jpg";
        mensaje.textContent = "Felicitaciones, has seleccionado la opción correcta";
        mensaje.style.color = "blue"
        mensaje.style.font = 'Times New Roman', Times, serif;
        mensaje.style.border = 1

    } else {
        intentos++;
        mensaje.textContent = "Pokémon incorrecto, intentalo nuevamente";
        mensaje.style.color = "red"
    }


      if (intentos > 3) {
           reiniciar();
       }
   

    var intentosElemento = document.getElementById("intentos");
    intentosElemento.textContent = "Intentos: " + intentos;
}



function reiniciar() {
    imagen.src = "../img/pnegro.jpg"; // Cambiar la ruta por la imagen predeterminada
    mensaje.textContent = "";
    mensaje.style.color = "green";
    titulo.style.color = "black"
    intentosElemento.textContent = "";

}


