//Reviews` slider
const testiProgress = document.querySelector('.scroll-slider');
const testiCards = document.querySelector('.comment-list__grid');

testiProgress.addEventListener('input', function () {
    let value = this.value;
    let cardWidth = 268;
    if(window.matchMedia('(max-width: 899px)').matches){
        testiCards.style.left = `${-value * (cardWidth + 70)}px`
    }else if(window.matchMedia('(max-width: 1160px)').matches){
        testiCards.style.left = `${-value * (cardWidth + 50)}px`
    }else{
        testiCards.style.left = `${-value * (cardWidth + 30)}px`
    }
})

//Animal's slider
let width = 395;
let count;
let list = document.querySelector('.animal-cards');
let listElems = document.querySelectorAll('.card');
let position = 0;

if(window.matchMedia('(max-width: 640px)').matches){
    count = 3.17;
}else if(window.matchMedia('(max-width: 1000px)').matches){
    count = 2.43;
}else{
    count = 3;
}

document.querySelector('.pag1-1').onclick = function() {
    position += width * count;
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
}

document.querySelector('.pag2-1').onclick = function() {
    position -= width * count;
    //position = Math.max(position, -width * (listElems.length - count));
    position = Math.max(position, -width * count);
    list.style.marginLeft = position + 'px';
}

//Burger-menu
window.onresize = function () { location.reload(); }

const tablet = window.matchMedia('(max-width: 640px)');
checkIfTablet();
function checkIfTablet() {
    if (tablet.matches) {
        let burgerMenuIcon = document.querySelector('.open-burger-menu');
        let closeIcon = document.querySelector('.close-burger-menu');
        let burgerMenu = document.querySelector('.burger-header__list');
        let overlay = document.querySelector('.overlay');

        burgerMenuIcon.addEventListener('click', () => {
            burgerMenu.classList.add('shown');
            overlay.style.display = 'block';
        });

        closeIcon.addEventListener('click', () => {
            burgerMenu.classList.remove('shown');
            overlay.style.display = 'none';
        });

        overlay.addEventListener('click', () => {
            burgerMenu.classList.remove('shown');
            overlay.style.display = 'none';
        });

        //Popup windows
        const reviewWrapper = document.querySelector('.testi-comment-wrapper');
        const reviews = document.querySelectorAll('.comment');
        const reviewsPop = document.querySelectorAll('.comment-popup');
        const popupCloseIcon = document.querySelector('.testi-comment-popup-close');

        for (let i = 0; i < reviews.length; i++) {
            reviews[i].addEventListener('click', () => {
                const index = i;
                reviewWrapper.classList.add('popup');
                reviewsPop.forEach(reviewPop => {
                    reviewPop.style.display = 'none';
                });
                reviewsPop[index].style.display = 'block';
                overlay.style.display = 'block';
            })
        }

        popupCloseIcon.addEventListener('click', () => {
            reviewWrapper.classList.remove('popup');
            overlay.style.display = 'none';
        })

        overlay.addEventListener('click', () => {
            reviewWrapper.classList.remove('popup');
            overlay.style.display = 'none';
        })
    }
}