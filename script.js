const textArea = document.querySelector(".text-area"); 
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"

function clickInicio(){
    var textArea = document.getElementsByClassName("text-area");
    var textarea = textArea[0];
    textarea.value = "";
}

function btnEncriptar(){
    const textoEncripado = encriptar(textArea.value)
    mensaje.value = textoEncripado
    textArea.value = '';
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoDesencripado = desencriptar(textArea.value)
    mensaje.value = textoDesencripado
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesncriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function ocultarBntCopiar(){
    var botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.style.display = "none"
}

function ocultarBntReiniciar(){
    var botonReiniciar = document.getElementById("botonReiniciar");
    botonReiniciar.style.display = "none"
}

function btnCopiar(){
    var textAreas = document.getElementsByClassName("mensaje");
    if (textAreas.length > 0) {
        var textoACopiar = textAreas[0].value;

        if(textoACopiar){
            var elementoTemporal = document.createElement("textarea");
            elementoTemporal.value = textoACopiar;

            document.body.appendChild(elementoTemporal);

            elementoTemporal.select();
            document.execCommand("copy");

            document.body.removeChild(elementoTemporal);

            alert("Texto copiado al portapapeles: " + textoACopiar);

            window.location.reload();
        } else {
            alert("Por favor, ingreso un texto a encriptar o desencriptar.");
        } 
        }
    }

function mostrarBtnCopiar(){
    var botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.style.display = "inline";
}

function btnReiniciar(){
    window.location.reload();
}

function monstrarBtnReiniciar(){
    var botonReiniciar = document.getElementById("botonReiniciar");
    botonReiniciar.style.display = "inline";
}