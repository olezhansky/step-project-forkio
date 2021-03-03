const headerMenuBurgerEl = document.querySelector('.header__menu-burger');
const headerMenuListEl = document.querySelector('.header__menu-list');
const burgerMenuBtnSpan1 = document.querySelector('.header__menu-burger span:nth-child(1)');
const burgerMenuBtnSpan2 = document.querySelector('.header__menu-burger span:nth-child(2)');
const burgerMenuBtnSpan3 = document.querySelector('.header__menu-burger span:nth-child(3)');
headerMenuBurgerEl.addEventListener('click', function() {
    headerMenuListEl.classList.toggle('header__menu-list--active');;
    burgerMenuBtnSpan1.classList.toggle('first');
    burgerMenuBtnSpan2.classList.toggle('middle');
    burgerMenuBtnSpan3.classList.toggle('last');
})

