document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os botões de avançar e voltar
const btnAvancar = document.getElementById("btt-avancar-exp");
const btnVoltar = document.getElementById("btt-voltar-exp");

// Seleciona as listas de habilidades
const lista1 = document.querySelector(".exp-1");
const lista2 = document.querySelector(".exp-2");

// Define a lista atual como sendo a primeira
let listaAtual = 1;

lista1.classList.add("selecionado");
lista2.classList.add("oculto");
console.log(listaAtual);
// Ao clicar no botão de avançar
btnAvancar.addEventListener("click", function() {
  // Verifica se a lista atual é a primeira
  if (listaAtual === 1) {
    listaAtual = 2;
    console.log(listaAtual);
    // Esconde a primeira lista e mostra a segunda
    lista1.classList.add("oculto");
    lista1.classList.remove("selecionado");
    lista2.classList.add("selecionado");
    lista2.classList.remove("oculto");
  }else{
    listaAtual = 1;
    console.log(listaAtual);
    // Esconde a primeira lista e mostra a segunda
    lista1.classList.add("selecionado");
    lista1.classList.remove("oculto");
    lista2.classList.add("oculto");
    lista2.classList.remove("selecionado");
  }
});

// Ao clicar no botão de voltar
btnVoltar.addEventListener("click", function() {
    // Verifica se a lista atual é a primeira
  if (listaAtual === 1) {
    listaAtual = 2;
    console.log(listaAtual);
    // Esconde a primeira lista e mostra a segunda
    lista1.classList.add("oculto");
    lista1.classList.remove("selecionado");
    lista2.classList.add("selecionado");
    lista2.classList.remove("oculto");
  }else{
    listaAtual = 1;
    console.log(listaAtual);
    // Esconde a primeira lista e mostra a segunda
    lista1.classList.add("selecionado");
    lista1.classList.remove("oculto");
    lista2.classList.add("oculto");
    lista2.classList.remove("selecionado");
  }
});
  });
