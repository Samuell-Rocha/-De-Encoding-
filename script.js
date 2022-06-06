const CaixaTexto = document.querySelector('#CaixaTexto');
const Mensagem = document.querySelector('.CaixaResultante')
var content = document.querySelector('.Conteudo')
var BotaoCopiar = document.querySelector('btnCopiar')
var resultado = document.querySelector('#Result')



function Criptografar(caixatexto, botao) {
    if (CaixaTexto.value) {
        const Encript = encriptar(CaixaTexto.value);
        resultado.value = Encript;
        document.getElementById(caixatexto).style.display = 'block';
        document.getElementById(botao).style.display = 'block';
        content.style.display = 'none';
    }


}

function Descriptografar(caixatexto, botao) {
    if (CaixaTexto.value) {
        const Descript = Descriptar(CaixaTexto.value);
        resultado.value = Descript;
        document.getElementById(caixatexto).style.display = 'block';
        document.getElementById(botao).style.display = 'block';
        content.style.display = 'none';
    }
}

function encriptar(StringDescriptada) {

    const characterTransform = [["a", "at"], ["e", "ef"], ["i", "iha"], ["o", "olet"], ["u", "uri"]];

    StringDescriptada = StringDescriptada.toLowerCase();


    for (let i = 0; i < characterTransform.length; i++) {
        if (StringDescriptada.includes(characterTransform[i][0])) {
            StringDescriptada = StringDescriptada.replaceAll(characterTransform[i][0], characterTransform[i][1])
        }
    }
    return StringDescriptada
}

function Descriptar(stringEncriptada) {
    const characterTransform = [["at", "a"], ["ef", "e"], ["iha", "i"], ["olet", "o"], ["uri", "u"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < characterTransform.length; i++) {
        if (stringEncriptada.includes(characterTransform[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(characterTransform[i][0], characterTransform[i][1])
        }
    }
    return stringEncriptada
}

function copiarTexto() {
    resultado.select();
    document.execCommand("copy");
}
