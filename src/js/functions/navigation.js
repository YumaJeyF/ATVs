export function topNavigation() {
    
    // Бургер меню

    const btnBurger = document.querySelector('.nav-burger');
    const hiddenMenu = document.querySelector('.nav__body');
    const header = document.querySelector('.header');

    btnBurger.addEventListener('click', () => openHiddenMenu(btnBurger));

    window.addEventListener('click', event => {
        if (!event.target.closest('.header') && header.classList.contains('header--visible')) openHiddenMenu(btnBurger);
    });

    window.addEventListener('keydown', event => {
        if (event.key === 'Escape' && header.classList.contains('header--visible')) openHiddenMenu(btnBurger);
    });

    function openHiddenMenu(btn) {
        if (!hiddenMenu.classList.contains('nav__body--visible') && !hiddenMenu.style.maxHeight) {
            btn.firstElementChild.classList.add('nav-burger__first--rotate');
            btn.firstElementChild.nextElementSibling.classList.add('nav-burger__second--rotate');
            btn.lastElementChild.classList.add('nav-burger__third--rotate');
            header.classList.add('header--visible');
            hiddenMenu.style.maxHeight = hiddenMenu.scrollHeight + 'px';
            hiddenMenu.classList.add('nav__body--visible');
        } else {
            btn.firstElementChild.classList.remove('nav-burger__first--rotate');
            btn.firstElementChild.nextElementSibling.classList.remove('nav-burger__second--rotate');
            btn.lastElementChild.classList.remove('nav-burger__third--rotate');
            header.classList.remove('header--visible');
            hiddenMenu.style.maxHeight = null;
            hiddenMenu.classList.remove('nav__body--visible');
        }
    }

    // Кнопка скролла вверх

    const btnScroll = document.querySelector('.scroll-to-top');
    const firstSection = document.querySelector('.first-section');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        console.log(scrollY)
        console.log(firstSection.offsetHeight)
        if (scrollY >= firstSection.offsetHeight) {
            btnScroll.classList.add('scroll-to-top--active');
        } else {
            btnScroll.classList.remove('scroll-to-top--active');
        }
    });

    btnScroll.addEventListener('click', () => {
        if (btnScroll.classList.contains('scroll-to-top--active')) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    });
}