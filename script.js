var papel, tijera, piedra;

var img=document.createElement('img');
img.src='1_yHZKuUPofUf39CpZ6frmxw.png';
img.onload = function () {
var c=document.getElementById('PPT');
var ctx=c.getContext('2d');
ctx.drawImage(img,0,0,400,162);
}


function prompt_elegir() {
    var elegir_elemento = prompt("Elige tu elemento (piedra, papel, tijera)");
    console.log(elegir_elemento)
    if (elegir_elemento == "piedra") {
        alert("has elegido piedra");
        return elemento = "piedra";
    } else if (elegir_elemento == "papel") {
        alert("has elegido papel");
        return elemento = "papel";
    } else if (elegir_elemento == "tijera") {
        alert("has elegido tijera");
        return elemento = "tijera";
    } else {
        alert("Este no es un elemento admitido. Revisa las mayusculas o un error tipografico.");
    };

    function escribir(respuesta) {
        alert("has elegido " + elegir_elemento)
    };
};

function jugar() {
    var elemento_enemigo = elegir_elemento_enemigo();
    alert("El enemigo eligió: " + elemento_enemigo)
    console.log("elemento enemigo: " + elemento_enemigo);
    console.log("elemento: " + elemento);
    if(elemento == 'tijera' && elemento_enemigo == 'papel' 
    || elemento == 'piedra' && elemento_enemigo == 'tijera' 
    || elemento == 'papel' && elemento_enemigo == 'piedra'){
        console.log("gana el jugador")
        alert("Ganaste!")
    }
    if(elemento == elemento_enemigo){
        console.log("Empate")
        alert("Es un empate.")
    }
    if(elemento == 'papel' && elemento_enemigo == 'tijera' 
    || elemento == 'tijera' && elemento_enemigo == 'piedra' 
    || elemento == 'piedra' && elemento_enemigo == 'papel'){
       console.log("Perdiste")
       alert("Haz perdido.") 
    }

}

function elegir_elemento_enemigo() {
    var resultado;
    resultado = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    var elemento_enemigo;
    switch (resultado) {
        case 0:
            elemento_enemigo = "tijera";
            break;
        case 1:
            elemento_enemigo = "piedra";
            break;
        case 2:
            elemento_enemigo = "papel";
            break;
        default:
            console.log("Error");
    };
    return elemento_enemigo;
}