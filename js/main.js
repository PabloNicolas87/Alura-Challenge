let resultado = document.querySelector(".resultado");

function criptografar() {
    let inputElement = document.querySelector('input');
    let texto = inputElement.value.trim();

    if (texto === "") {
        exibirTextoNaTela("O campo de texto está vazio. Por favor, digite um texto.", "error");
        return;
    }

    if (/^[a-z\s,.!?]*$/.test(texto)) {
        let textoCriptografado = texto.replace(/e/g, "enter")
                                      .replace(/i/g, "imes")
                                      .replace(/a/g, "ai")
                                      .replace(/o/g, "ober")
                                      .replace(/u/g, "ufat");

        exibirTextoNaTela(textoCriptografado, "criptografado");
        ocultarElementosQuitar();
        mostrarElementosOcultados();
        copiarAlPortapapeles(textoCriptografado);
    } else {
        exibirTextoNaTela("Por favor, ingrese apenas letras minúsculas e sem acento.", "error");
    }
}

function descriptografar() {
    
    let inputElement = document.querySelector('input');
    let texto = inputElement.value.trim();

    if (texto === "") {
        exibirTextoNaTela("O campo de texto está vazio. Por favor, digite um texto.", "error");
        return;
    }

    let textoDescriptografado = texto.replace(/enter/g, "e")
                                      .replace(/imes/g, "i")
                                      .replace(/ai/g, "a")
                                      .replace(/ober/g, "o")
                                      .replace(/ufat/g, "u");

    exibirTextoNaTela(textoDescriptografado, "descriptografado");
    ocultarElementosQuitar();
    mostrarElementosOcultados();
    copiarAlPortapapeles(textoDescriptografado);
}

function exibirTextoNaTela(texto, tipo) {
    resultado.innerHTML = texto;

    if (tipo === "error") {
        resultado.style.color = "red";
    } else {
        resultado.style.color = "black";
    }
}

function ocultarElementosQuitar() {
    let elementosQuitar = document.querySelectorAll(".quitar");
    elementosQuitar.forEach(elemento => elemento.style.display = "none");
}
function mostrarElementosOcultados() {
    let elementosOcultados = document.getElementsByClassName("ocultado");
    for (let i = 0; i < elementosOcultados.length; i++) {
        elementosOcultados[i].style.display = "block";
    }
}

function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}