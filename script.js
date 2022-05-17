const CaixaTexto = document.querySelector('#CaixaTexto');
const Mensagem = document.querySelector('.CaixaResultante')
var content = document.querySelector('.Conteudo')
var BotaoCopiar = document.querySelector('btnCopiar')
var resultado = document.querySelector('#Result')



function Criptografa(caixatexto, botao) {
    if (CaixaTexto.value) {
        const Encript = encriptar(CaixaTexto.value);
        resultado.value = Encript;
        document.getElementById(caixatexto).style.display = 'block';
        document.getElementById(botao).style.display = 'block';
        content.style.display = 'none';
    }


}

function Descriptografar() {
    const Descript = Descriptar(Mensagem.value)


}

function encriptar(StringDescriptada) {

    const characterTransform = {
        a: "aes",
        e: "eis",
        i: "oas",
        o: "ius",
        u: "uos",
    }

    StringDescriptada = StringDescriptada.toLowerCase();

    const StringEncriptada = StringDescriptada.split("").map(character => characterTransform[character] || character).join("")
    return StringEncriptada;
}

function Descriptar(stringDescriptada) {
    let criptografia = [["a", "aes"], ["e", "eis"], ["o", "oas"], ["i", "ius"], ["u", "uos"]];
    StringEncriptada = StringEncriptada.toLowerCase()

    for (i = 0; i < criptografia.length; i++) {
        if (StringDescriptada.include(criptografia[i][1])) {
            StringDescriptada = StringDescriptada.replaceAll(criptografia[i][1], criptografia[i][0])
        }
    }
    return StringDescriptada;
}

function copiarTexto() {
    resultado.select();
    document.execCommand("copy");
}
