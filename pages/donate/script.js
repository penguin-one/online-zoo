window.onresize = function () { location.reload(); }

//Burger-menu
const tablet = window.matchMedia('(max-width: 640px)');

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
    }
}
checkIfTablet();

//Amount block
function toggleValueAmountMoney() {
    let amountLine = document.querySelector('.feed__line');
    let allMoney = document.querySelector('.feed__amount-money');
    let moneySelection = document.querySelectorAll('.feed__amount-dollars');
    let inputAmount = document.querySelector('.input__number');
    let circleSelection = document.querySelector('.roller-ico');
    let circle100 = document.querySelectorAll('.circle3')[0];
    let circleMoney100 = document.querySelectorAll('.circle3')[1];
    let allCircle = document.querySelectorAll('.feed__yellow-circle');

    inputAmount.value = 100;

    amountLine.onclick = function(event) {
        let target = event.target;
        if(!target.classList.contains('feed__yellow-circle')){
            return;
        }
        target.append(circleSelection);

        for(let elem of moneySelection) {
            if(elem.classList.contains(target.classList['1'])) {
                elem.classList.add('selected');
                let money = elem.textContent;
                inputAmount.value = money.slice(2);
            }else{
                elem.classList.remove('selected');
            }
        }
    }

    inputAmount.oninput = function() {
        for(let elem of moneySelection) {
            let money = elem.textContent;

            if(inputAmount.value == money.slice(2)) {
                for(let item of allMoney.children) {
                    item.classList.remove('selected');
                }
                elem.classList.add('selected');
                for(let i of allCircle){
                    if(i.classList.contains(elem.classList['1'])){
                        i.append(circleSelection);
                    }
                }
            }else if(inputAmount.value == '') {
                for(let item of allMoney.children) {
                    item.classList.remove('selected');
                }
                circle100.append(circleSelection);
                circleMoney100.classList.add('selected');
            }
        }
    }
}
toggleValueAmountMoney();