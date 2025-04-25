let imagemAtual = 1;
const totalImagens = 3;

const imagemPorId = document.getElementById("imagem");

function voltarUmaImagem() {
    imagemAtual--;
    if (imagemAtual < 1) {
        imagemAtual = totalImagens;
    }
    imagemPorId.src = `imagens/imagem-${imagemAtual}.jpg`;
}

function avancarUmaImagem() {
    imagemAtual++;
    if (imagemAtual > totalImagens) {
        imagemAtual = 1;
    }
    imagemPorId.src = `imagens/imagem-${imagemAtual}.jpg`;
}
