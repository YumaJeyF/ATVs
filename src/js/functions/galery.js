import { vars } from "../_vars.js";
import Swiper, { Keyboard, Lazy, Navigation } from 'swiper';
Swiper.use([Navigation, Keyboard]);

export function workGalery() {
    const { body, container } = vars;
    const btnsPictures = document.querySelectorAll('.galery__pic');
    const btnClose = document.querySelector('.galery-container__btn-close');
    const slider = document.querySelector('.galery-container');

    // Открытие. Закрытие

    // ====================================================================================================================

    btnsPictures.forEach(picture => picture.addEventListener('click', openSlider));
    btnClose.addEventListener('click', closeSlider);

    slider.addEventListener('click', event => {
        if (!event.target.closest('.galery-container__window') && !event.target.dataset.btn) closeSlider(); 
    });

    window.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeSlider();
    });

    // ====================================================================================================================

    const arrayBtnPictures = [...btnsPictures];

    function openSlider() {
        const paddingRight = window.innerWidth - body.offsetWidth + 'px';
        const swiperGalery = document.querySelector('.galery-container__window');

        if (!slider.classList.contains('galery-container--active')) {
            container.style.paddingRight = paddingRight;
            slider.classList.add('galery-container--active');
            slider.lastElementChild.classList.add('galery-container__window--active');
            body.style.top = -window.scrollY + 'px';
            body.style.position = 'fixed';

            let indexPicture = arrayBtnPictures.indexOf(this);

            const sliderGalery = new Swiper(swiperGalery, {
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: false,
                }
            });
            
            sliderGalery.slideTo(indexPicture);
        }
    }

    function closeSlider() {
        if (slider.classList.contains('galery-container--active')) {
            slider.lastElementChild.classList.remove('galery-container__window--active');
            slider.classList.remove('galery-container--active');
            body.style.position = '';
            window.scrollTo(0, parseInt(body.style.top) * -1);
            container.style.paddingRight = '';
        }
    }
}