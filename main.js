const background1 = "../imagens/1";
const background2 = "../imagens/2";
const background3 = "../imagens/3";
let backgrounds = [background1,background2,background3];

let img = document.querySelector(".imagensHome");
let i = 0;

function mudarBg() {
  i++;
  if(i > 2){
    i=0;
  }
  img.style.backgroundImage = `url("${backgrounds[i]}.jpg")`
}

function mudarBgBack() {
  i--;
  if(i < 0){
    i = 2
  }
  img.style.backgroundImage = `url("${backgrounds[i]}.jpg")`
}

//Funções Obras
let imagem1 = document.getElementById("1");
let imagem2 = document.getElementById("2");
let imagem3 = document.getElementById("3");
let imagem4 = document.getElementById("4");
let imagem5 = document.getElementById("5");
let imagem6 = document.getElementById("6");
let imagem7 = document.getElementById("7");
let imagem8 = document.getElementById("8");
let imagem9 = document.getElementById("9");
let imagem10 = document.getElementById("10");
let imagem11 = document.getElementById("11");
let imagem12 = document.getElementById("12");

let counter = 0;
let numInt;

function mudarImagem(tipo, num){
  counter++;
  numInt = parseInt(num);
  if(counter == parseInt(num)){
    counter = 0;
  }

  if(tipo == 'gato'){
    imagem1.src = `../imagens/Obras/${tipo}${(counter % numInt)}.png`
    imagem2.src= `../imagens/Obras/${tipo}${((counter+1) % numInt)}.png`
    imagem3.src= `../imagens/Obras/${tipo}${((counter+2) % numInt)}.png` 
  }
  if(tipo == 'pessoa'){
    imagem4.src = `../imagens/Obras/${tipo}${(counter % numInt)}.png`
    imagem5.src= `../imagens/Obras/${tipo}${((counter+1) % numInt)}.png`
    imagem6.src= `../imagens/Obras/${tipo}${((counter+2) % numInt)}.png` 
  }

  if(tipo == 'animal'){
    imagem7.src = `../imagens/Obras/${tipo}${(counter % numInt)}.png`
    imagem8.src= `../imagens/Obras/${tipo}${((counter+1) % numInt)}.png`
    imagem9.src= `../imagens/Obras/${tipo}${((counter+2) % numInt)}.png` 
  }

  if(tipo == 'paisagem'){
    imagem10.src = `../imagens/Obras/${tipo}${(counter % numInt)}.png`
    imagem11.src= `../imagens/Obras/${tipo}${((counter+1) % numInt)}.png`
    imagem12.src= `../imagens/Obras/${tipo}${((counter+2) % numInt)}.png` 
  }

};

function mudarImagemBack(tipo, num){
  counter--;
  numInt = parseInt(num);
  if(counter == -1){
    counter = num;
  }
  if(tipo == 'gato'){
    imagem1.src = `../imagens/Obras/${tipo}${(counter % numInt)}.png`
    imagem2.src= `../imagens/Obras/${tipo}${((counter+1) % numInt)}.png`
    imagem3.src= `../imagens/Obras/${tipo}${((counter+2) % numInt)}.png` 
  }
  if(tipo == 'pessoa'){
    imagem4.src = `../imagens/Obras/${tipo}${(counter % numInt)}.png`
    imagem5.src= `../imagens/Obras/${tipo}${((counter+1) % numInt)}.png`
    imagem6.src= `../imagens/Obras/${tipo}${((counter+2) % numInt)}.png` 
  }

  if(tipo == 'animal'){
    imagem7.src = `../imagens/Obras/${tipo}${(counter % numInt)}.png`
    imagem8.src= `../imagens/Obras/${tipo}${((counter+1) % numInt)}.png`
    imagem9.src= `../imagens/Obras/${tipo}${((counter+2) % numInt)}.png` 
  }

  if(tipo == 'paisagem'){
    imagem10.src = `../imagens/Obras/${tipo}${(counter % numInt)}.png`
    imagem11.src= `../imagens/Obras/${tipo}${((counter+1) % numInt)}.png`
    imagem12.src= `../imagens/Obras/${tipo}${((counter+2) % numInt)}.png` 
  }
};
