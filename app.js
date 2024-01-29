//Variables globales
let numeroIntentos = 3;
let contador = 1;
let listaSorteados = [];
let numeroSecreto = 0;

function condicionesIniciales()
{
    asignarTextoElemento('h1', "Juego del número secreto");
    asignarTextoElemento('p', "Elige un número del 1 al 10");

    //Verificamos si la longitud de la lista es de 7, al ser asi los intentos se limitan los intentos y debo resetear la lista
    if(listaSorteados.length == 7)
    {
        listaSorteados = [];
    }
    
    numeroSecreto = generarNumeroSecreto();
    contador = 1;
    limpiarCaja();
}

function generarNumeroSecreto()
{
    let numeroGenerado = Math.floor(Math.random()*10) + 1;
    
    if(listaSorteados.includes(numeroGenerado))
    {
        return generarNumeroSecreto();
    }
        
    else
    {
        console.log("La lista tiene: " + listaSorteados);
        console.log("Aleatorio resultante: " + numeroGenerado);
        console.log("Longitud de lista: " + listaSorteados.length);
        listaSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function asignarTextoElemento(elemento, texto)
{
        //Le digo traelo y se lo atribuyo a un objeto
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja()
{
    //Puedo usar query selector con un Id usando el operador #
    document.querySelector('#valorUsuario').value = '';
}

function verificarIntento()
{
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(contador <= numeroIntentos)
    {
        if(numeroDeUsuario == numeroSecreto)
        {
            asignarTextoElemento('p', `Acertaste el número en ${contador} ${contador == 1 ? ' intento' : ' intentos'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
            
        else
        {
            if(numeroDeUsuario > numeroSecreto)
            {
                asignarTextoElemento('p', "Intenta un número más pequeño");
            }
    
            else
            {
                asignarTextoElemento('p', "Intenta un número más grande");
            }
            limpiarCaja();
        }
        contador+=1;
    }

    else
    {
        reiniciarJuego();
        alert("Alcanzaste el número máximo de intentos, refresca para iniciar un nuevo juego");
    }
    return;
}

function reiniciarJuego()
{
    //Se genera otro número aleatorio
    //Se resetean los intentos
    //Se restaura el mensaje inicial de intervalos y del num secreto
    //Se limpia la caja
    condicionesIniciales();

    //Se deshabilita el botón de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}
//Instauramos todo
condicionesIniciales();