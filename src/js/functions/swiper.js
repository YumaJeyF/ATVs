import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export function workSwiper() {
    Swiper.use([Navigation, Pagination, Autoplay]);

    const sliderHead = document.querySelector('.swiper-head');

    const swiperHead = new Swiper(sliderHead, {
        direction: 'vertical',
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true,
	    pagination: {
		    el: '.swiper-pagination-head',
		    clickable: true,
	    },
        breakpoints: {
            280: {
                direction: 'horizontal',
            },
            577: {
                direction: 'vertical'
            }
        }
    });

    const slidersMain = document.querySelectorAll('.swiper-main');

    slidersMain.forEach(slider => {
        const swiperMain = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.pag',
                clickable: true,
            },
        });
    });

    const sliderGalery = document.querySelector('.swiper-galery');

    const swiperGalery = new Swiper(sliderGalery, {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        slidesPerGroup: 2,
        speed: 1000,
        pagination: {
            el: '.pag',
            clickable: true,
        },
        breakpoints: {
            1980: {
                slidesPerView: 5
            },
            1290: {
                slidesPerView: 3
            },
            260: {
                slidesPerView: 1,
                slidesPerGroup: 1
            }
    
        }
    });
}