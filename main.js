const background1 = "../imagens/1";
const background2 = "../imagens/2";
const background3 = "../imagens/3";
let backgrounds = [background1,background2,background3];

var img = document.querySelector(".imagensHome");
let i = 1;

function mudarBg() {
  img.style.backgroundImage = `url("${backgrounds[i]}.jpg")`
  i++;
  console.log("i:", i);
  if(i > 2){
    i=0;
  }
}
