document.addEventListener('DOMContentLoaded', function() {
    // Generar número aleatorio entre 1 y 100
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    const maxIntentos = 7;

    // Obtener referencia al botón y al input
    const adivinarBtn = document.getElementById('adivinarBtn');
    const numeroInput = document.getElementById('numeroInput');
    const contadorIntentos = document.getElementById('contador');
    const reiniciarBtn = document.getElementById('reiniciarBtn');

    // Agregar evento click al botón
    adivinarBtn.addEventListener('click', function() {

        if (intentos > maxIntentos) {
            alert(`¡Has superado el número máximo de intentos! El número era ${numeroAleatorio}`);
            return;
        }

        // Obtener el número ingresado por el usuario
        let numeroUsuario = parseInt(numeroInput.value);

        // Validar si el número está dentro del rango
        if (numeroUsuario < 1 || numeroUsuario > 100 || isNaN(numeroUsuario)) {
            alert('Ingresa un número válido del 1 al 100');
            return;
        }

        // Comparar el número ingresado con el número aleatorio
        if (numeroUsuario === numeroAleatorio) {
            alert(`¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);
        } else if (numeroUsuario < numeroAleatorio) {
            alert('El número a adivinar es mayor.');
        } else {
            alert('El número a adivinar es menor.');
        }
        

        intentos++;
        contadorIntentos.textContent = maxIntentos - intentos;

        // vaciar el input después de cada intento
        numeroInput.value = '';
    });

    reiniciarBtn.addEventListener('click', function(){
        location.reload(); // Recargar la página para reiniciar el juego
    })git 
});








// let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// let numIngresado = 0;
// let acertado = false;
// let cantIntentos = 0;
// const ADIVINO = '¡Adivinaste!'
// const MAYOR = 'El número secreto es mayor'
// const MENOR = 'El número secreto es menor'

// // numIngresado = prompt('intente con un número')
// // if(isNumValido(numIngresado)){
// //     let respuesta = calcularRespuesta(numIngresado)
// //     console.log(respuesta)
// //     if(!(respuesta === '¡Adivinaste!')){
// //         numIngresado = prompt('intente con otro número')
// //     }
// // } else{
// //     numIngresado = prompt('el número no es válido. intente con otro número')
// // }

// while(acertado == false && cantIntentos < 7){
//     numIngresado = prompt('ingrese un número del 1 al 100')
//     if(!isNumValido(numIngresado)){
//         numIngresado = prompt('Número inválido. Intente de nuevo')
//     }else{
//         if (calcularRespuesta(numIngresado) == ADIVINO){
//             acertado = true;
//             alert(ADIVINO)
//         }
//         cantIntentos ++;
//     }
    
// }



// // VALIDACIONES
// function isNumValido (numero){
//     return  (numero > 0 && numero <= 100)
// }

// function calcularRespuesta(numero){
//     let respuesta = ' ';
//     if(numero == numeroSecreto){
//         respuesta = ADIVINO
//     } else if (numero < numeroSecreto){
//         respuesta = MAYOR
//     } else{
//         respuesta = MENOR
//     }
//     return respuesta
// }

