// #region Aula
let menor;
let maior;
let tentativas;
let numeroAleatorio;
novoJogo();

function novoJogo() {
  menor = 1;
  maior = 100;
  tentativas = 0;
  numeroAleatorio = gerarNumeroAleatorio(menor, maior);
  editarTexto("h1", "Jogo do número secreto");
  editarTexto("p", `Escolha um número entre ${menor} e ${maior}`);
  document.querySelector("#chutar").disabled = false;
  document.querySelector("#reiniciar").disabled = true;
  document.querySelector("input").disabled = false;
  document.querySelector("input").value = "";
}
function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == "") {
    editarTexto(
      "p",
      `Você precisa digitar um número!! Escolha um número entre ${menor} e ${maior}`
    );
    return;
  }
  tentativas++;
  if (chute == numeroAleatorio) {
    palavraTentativas = tentativas == 1 ? "tentativa" : "tentativas";
    editarTexto(
      "p",
      `Parabéns você acertou em ${tentativas} ${palavraTentativas}!`
    );
    document.querySelector("#chutar").disabled = true;
    document.querySelector("#reiniciar").disabled = false;
    document.querySelector("input").disabled = true;
  } else if (chute > numeroAleatorio) {
    maior = chute;
    editarTexto(
      "p",
      `Errou, o número é menor!! Escolha um número entre ${menor} e ${maior}`
    );
    document.querySelector("input").value = "";
  } else if (chute < numeroAleatorio) {
    menor = chute;
    editarTexto(
      "p",
      `Errou, o número é maior!! Escolha um número entre ${menor} e ${maior}`
    );
    document.querySelector("input").value = "";
  }
}
function editarTexto(seletor, texto) {
  let q = document.querySelector(seletor);
  q.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}
function gerarNumeroAleatorio(menor, maior) {
  return parseInt(Math.random() * maior) + menor;
}
// #endregion
