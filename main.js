//evento scroll opacidade Heading
const tituloHome = document.getElementById('h1Aldemir');
window.addEventListener('DOMcontentLoaded',
    window.addEventListener('scroll',()=>{
    tituloHome.style.opacity=0;
    let valorScrollY = window.scrollY;
    tituloHome.style.opacity += valorScrollY/300;
}))




//evento scroll png Aldemir
const pngAldemir = document.getElementById('imgHomeAldemir');
window.addEventListener('DOMcontentLoaded',
window.addEventListener('scroll',()=>{
    
    const limiteScroll = `420px`;  
    let valorScrollY = window.scrollY * 2.4;
    //Verificador scroll Maximo
    if(valorScrollY>900){
        valorScrollY = 900;
    }
    pngAldemir.style.marginBottom = `${valorScrollY}px`;
}))

//evento scroll opacidade imagemPraia
const imgHomePraia = document.getElementById('imgHomePraia');
window.addEventListener('DOMcontentLoaded',
    window.addEventListener('scroll',()=>{
    imgHomePraia.style.opacity=0;
    let valorScrollY = window.scrollY;
    imgHomePraia.style.opacity += valorScrollY/800;
    
}))


