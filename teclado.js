function reloj(){
    // Variabes donde recogemos la fecha, segundos, minutos...
    let fecha = new Date();
    let segundo = fecha.getSeconds();
    let minuto = fecha.getMinutes();
    let hora = fecha.getHours();

    let dia_num = fecha.getDate();
    // Creamos un array con los días de la semana escritos.
    // Empezamos por el domingo puesto que utilizaremos la función getDay(), que devuelve un número, donde el 0 corresponde a domingo.
    let semana = new Array ("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado",);
    let dia_letra = semana[fecha.getDay()]

    // Del mismo modo que hacíamos con los días de la semana, hacemos lo mismo con los meses.
    let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    let mes = meses[fecha.getMonth()];
    let ano = fecha.getFullYear();

    // Estas sentencias IF lo que controlan es que en caso de que las horas, minutos o segundos tengan un solo digito, ponga un 0 delante.
    if (hora < 10) {
        hora = `0${hora}` 
    }

    if (minuto < 10) {
        minuto = `0${minuto}` 
    }

    if (segundo < 10) {
        segundo = `0${segundo}` 
    }
    
    let final = dia_letra + " " + dia_num + " de " + mes + " de " + ano +", " + hora + ":" + minuto + ":" + segundo;
    document.getElementById("reloj").innerHTML = final;
    
}

// Con la siguiente dos líneas conseguimos que la función se ejecute cada segundo.
// Haciendo así que de la sensación de actualizar el reloj cada segundo que pasa.
reloj();
setInterval(reloj,1000);

// Creamos un array que contendrá todos los valores del teclado.
let chars = new Array ("1","2","3","4","5","6","7","8","9","0","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m");
// Declaramos una variable la cual hace una función de pasar la array anterior a mayúsculas.
let charsUpper = chars.map(a => a.toUpperCase());
let capsLock = false;
let shift = false;
function teclado(value) {

    for (let i = 0; i < chars.length; i++) {
        if (value === chars[i]) {
            // Controlamos si CAPS LOCK está ACTIVADO y SHIFT desactivado. De estarlo, escribirmos en MINUS.
            if (capsLock == true && shift == false) {
                document.getElementById("display").innerHTML += charsUpper[i];
            // Controlamos si CAPS LOCK y SHIFT están ACTIVADOS. De estarlo, escribimos en MINUS.
            // Al estar el shift acgtivado, luego marcamos que se desactive. También controlamos el cambio de color del botón.
            } else if (capsLock == true && shift == true) {
                document.getElementById("display").innerHTML += chars[i];
                shift = false;
                document.getElementById("right-shift").style.backgroundColor = "#f9f9f9";
                document.getElementById("left-shift").style.backgroundColor = "#f9f9f9";
            // Controlamos si CAPS LOCK está DESACTIVADO y SHIFT ACTIVADO. De estarlo, escribimos en MAYUS.
            // Al estar el shift acgtivado, luego marcamos que se desactive. También controlamos el cambio de color del botón.
            } else if (capsLock == false && shift == true) {
                document.getElementById("display").innerHTML += charsUpper[i];
                shift = false;
                document.getElementById("right-shift").style.backgroundColor = "#f9f9f9";
            document.getElementById("left-shift").style.backgroundColor = "#f9f9f9";
            // Controlamos si CAPS LOCK y SHIFT están DESACTIVADOS. De estarlo, escribimos MINUS.
            } else {
                document.getElementById("display").innerHTML += chars[i];
            }
        }
    }
}

function functionCapsLock() {
    capsLock = !capsLock;
    // Si el CAPSLOCK está activado, le cambio el color y pongo todas las letras del teclado en mayusculas.
    if (capsLock == true) {
        document.getElementById("capslock").style.backgroundColor = "#c5c5c5";
        for (let i = 0; i < chars.length; i++) {
            document.getElementById(chars[i]).innerHTML = charsUpper[i];
        }
    // Si el CAPSLOCK está desactivado, le cambio el color al por defecto y pongo todas las letras del teclado en mayusculas.
    } else {
        document.getElementById("capslock").style.backgroundColor = "#f9f9f9";
        for (let i = 0; i < chars.length; i++) {
            document.getElementById(chars[i]).innerHTML = chars[i];
        }
    }

    return capsLock;

}

// Función que controla si se ha pulsado la tacla sifht, tanto la izquierda como la derecha.
// En caso de estar pulsada, le cambiamos el color para que de la sensación de que esté pulsada.
// En caso contrario, le aplicamos el color por defecto.
function functionShift() {
    shift = !shift;
    if (shift == true) {
        document.getElementById("right-shift").style.backgroundColor = "#c5c5c5";
        document.getElementById("left-shift").style.backgroundColor = "#c5c5c5";
    } else {
        document.getElementById("right-shift").style.backgroundColor = "#f9f9f9";
        document.getElementById("left-shift").style.backgroundColor = "#f9f9f9";
    }
    return shift;
}

// La intención de esta función es coger el valor que hay en display, quitarle el úlitmo valor e imprimir de nuevo todo.
function borrar() {
    let x = document.getElementById("display").innerHTML;
    let a = x.split("");
    let acumulador = "";

    for (let i = 0; i < a.length -1; i++) {
        acumulador += a[i];
    }
    document.getElementById("display").innerHTML = acumulador;
}

// Sencillamente utilizamos \n para hacer un salto de línea.
function intro() {
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "\n";
}

// Sencillamente utilizamos \t para simular un tabulador.
function tab() {
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "\t";
}

// Sencillamente utilizamos %nbsp para simular un espacio.
function space() {
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "&nbsp";
}