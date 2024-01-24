let  numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10 ;


function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function VerficarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos ===1 ? 'vez':'veces'} `)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();

    }
        
    return;
}

function limpiarCaja(){
    document.querySelector('#ValorUsuario').value='';
    
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p',' Ya se sortearon toodos los numeros posibles')
    }else{//Si el nuemro generado esta incluido en la lista 
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    
    }
}

    

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1 ;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numero
    //Generar el numero aleatorio
    //Deshabilitar el boton de nuevo juego
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    //inicializar el numero de intentos
}
 condicionesIniciales();


