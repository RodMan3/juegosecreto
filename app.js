//declaracion de variables
let numeroSecreto = 0
let intentos = 0; //contador
let listaNumerosSorteados = []; //lista
let numeroMaximo = 10;

console.log(numeroSecreto);

//funcion que permite recibir parametros para poder reutilizarla con cualquier elemento
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//captura el valor ingresado por el usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) { //verifica si el numero ingresado por el usuario es igual al numero secreto
        //${intentos == 1 ? "vez": "veces" compara si intentos es igual 1 da vez si es diferente da veces
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        
        //habilita el boton de nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero secreto es menor");
        } else{
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//permite limpiar la caja en la que el usuario hace un intento
function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
   
}

//genera un numero entero aleatorio entre 1 a 10
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //verifica si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    } else {
    //si el numero generado esta incluido en la lista hacemos una operacion si no hacemos otra
    if (listaNumerosSorteados.includes(numeroGenerado)){ //verifica si el numero esta incluido en el array
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado); //guarda el numero generado en el array
        return numeroGenerado;
    }
  }
}

//genera los mensajes iniciales, el numero secreto y el valor del contador de intentos
function condicionesInciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`indica un numero del 1 al ${numeroMaximo}`);
    //generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //inicializar el numero de intentos
    intentos = 1;
}

/*genera todo lo necesario para reiniciar el juego, mensajes iniiales, 
numero secreto y valor de contador de intentos*/
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();

    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesInciales();

    //deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesInciales(); 



