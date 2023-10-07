// document.getElementById("contaiener").innerHTML = `HOLA MUNDO!!`;

// Tipos de variables en Javascript 
// var, let, const

// VAR 
var vNumero1 = 10;
var vNumero2 = 20;

var vNombre = "Juan";
var vEsHombre = true;
var vResultado;

// LET
let vNumero3 = 30;

// CONST
const vNumero4 = 40;


document.getElementById("button").addEventListener("click", function() {
    validarCamposVacios();

    console.log(esTexto(document.getElementById("Nombre").value));

    if (!esTexto(document.getElementById("Nombre").value)) {
        alert("El campo Nombre No es texto o contiene simbolos o numeros");
    } else if (!esNumero(document.getElementById("Edad").value)) {
        alert("El campo Numero No es un numero o contiene simbolos o texto");
    } else {
        Saludar(document.getElementById("Nombre").value, document.getElementById("Edad").value);
    }
    
});


function Saludar(nombre, edad) {
    alert(`Hola ${nombre} tienes ${edad} años`);
}

function Sumar() {
    vNumero1 = 100;
    vResultado = vNumero1 + vNumero2 + vNumero3 + vNumero4;
    alert(`El resultado es ${vResultado}`);
}

function esTexto(cadena) {
    var vExpresionRegular = /^[a-zA-Z\s]+$/;
    if (vExpresionRegular.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

function esNumero(cadena) {
    var vExpresionRegular = /^[0-9]+$/;
    if (vExpresionRegular.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

function validarCamposVacios() {
    if(document.getElementById("Nombre").value === "") {
        alert("El campo Nombre esta vacio");
        return;
    }

    console.log(document.getElementById("Edad").value);

    if(document.getElementById("Edad").value === "0" || document.getElementById("Edad").value === "" ) {
        alert("El campo Edad esta vacio");
        return;
    }
}