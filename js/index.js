var textoOrigen = document.getElementById("mensaje-ingresado");
var textoEncriptado = document.getElementById("devolucion-mensaje");
var background = document.querySelector(".Área-Traducción");
var accionEncriptar = document.querySelector("#encriptar");
var accionDesencriptar = document.querySelector("#desencriptar");
var accionCopiar = document.querySelector("#copiar");
textoEncriptado.disabled = true;

accionEncriptar.onclick = function() {
    ocultarBackground();
    var textoEncriptado = textoOrigen.value.toLowerCase();
    if (textoEncriptado === "") {
        background.classList.remove("cambiarBackground");
        textoEncriptado.classList.remove("cambiarBackground");
        return;
    }
    let resultadotexto = textoEncriptado.replace(/[aeiou]/g, function(letra) {
        switch (letra) {
            case "a":
                return "ai";
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "o":
                return "ober";
            case "u":
                return "ufat";
            default:
                break;
        }
    });
    document.getElementById("devolucion-mensaje").value = resultadotexto;
    textoOrigen.value = "";
};

function ocultarBackground() {
    background.classList.add("cambiarBackground");
    textoEncriptado.classList.add("cambiarBackground");
}


function eliminarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

var textarea = document.querySelector("textarea");
textarea.addEventListener("input", function(event) {
    var textoSinAcentos = eliminarAcentos(event.target.value);
    event.target.value = textoSinAcentos;
});


accionDesencriptar.onclick = function() {
    ocultarBackground();
    var textoEncriptado = textoOrigen.value.toLowerCase();
    if (textoEncriptado === "") {
        background.classList.remove("cambiarBackground");
        textoEncriptado.classList.remove("cambiarBackground");
        return;
    }
    let resultadotexto = textoEncriptado.replace(/(ai|enter|imes|ober|ufat)/g, function(letra) {
        switch (letra) {
            case "ai":
                return "a";
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ober":
                return "o";
            case "ufat":
                return "u";
            default:
                break;
        }
    });
    document.getElementById("devolucion-mensaje").value = resultadotexto;
    textoOrigen.value = "";
};

accionCopiar.onclick = function() {
    var copiarEncriptado = document.getElementById("devolucion-mensaje").value;
    navigator.clipboard.writeText(copiarEncriptado);
};
