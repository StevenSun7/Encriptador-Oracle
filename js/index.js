var textoOrigen = document.getElementById("mensaje-ingresado");
var textoEncriptado = document.getElementById("devolucion-mensaje");
var accionEncriptar = document.querySelector("#encriptar");
var accionDesencriptar = document.querySelector("#desencriptar");
var accionCopiar = document.querySelector("#copiar");
textoEncriptado.disabled = true;

accionEncriptar.onclick = function() {
    var textoEncriptado = textoOrigen.value.toLowerCase();
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

function eliminarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

var textarea = document.querySelector("textarea");
textarea.addEventListener("input", function(event) {
    var textoSinAcentos = eliminarAcentos(event.target.value);
    event.target.value = textoSinAcentos;
});


accionDesencriptar.onclick = function() {
    var textoEncriptado = textoOrigen.value.toLowerCase();
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


// Solucion propuesta por Alura https://www.youtube.com/watch?v=DVjp-TJihAM

// var textoArea = document.querySelector(".ingresar-texto");
// var mensaje = document.querySelector(".area-traduccion");

// function botonE(){
//     const textoEncriptado = encriptar(textoArea.value)
//     mensaje.value = textoEncriptado
//     textoArea.value = "";
// }

// function encriptar(stringEncriptado){
//     let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//     stringEncriptado = stringEncriptado.toLowerCase()

//     for(let i = 0; i < matrizCodigo.length; i++){
//         if(stringEncriptado.includes(matrizCodigo [i][0])){
//             stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
//         }
//     }
//     return stringEncriptado
// }


// function botonD(){
//     const textoEncriptado = desencriptar(textoArea.value)
//     mensaje.value = textoEncriptado
//     textoArea.value = "";
// }

// function desencriptar(stringDesencriptado){
//     let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//     stringDesencriptado = stringDesencriptado.toLowerCase()

//     for(let i = 0; i < matrizCodigo.length; i++){
//         if(stringDesencriptado.includes(matrizCodigo [i][1])){
//             stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
//         }
//     }
//     return stringDesencriptado
// }