'use strict';

let cardTanya = document.querySelector(".card-1");
let cardJohn = document.querySelector(".card-2");
let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");

btnPrev.addEventListener('click', changeCard);
btnNext.addEventListener('click', changeCard);

function changeCard(){
    if(cardTanya.style.display == 'none'){
        cardJohn.style.display = 'none';
        cardTanya.style.display = 'flex';
        return;
    }
    cardTanya.style.display = 'none';
    cardJohn.style.display = 'flex';
}