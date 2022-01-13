import Swiper from './swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.portfolio__arow_right',
        prevEl: '.portfolio__arow_left',
        disabledClass: '.portfolio__arow_disable',
    },
    breakpoints: {
        480: {
            grid: {                
                fill: 'row',
                rows: 2
            }
        },
        768: {
            slidesPerView: 2,
            grid: {
                fill: 'row',
                rows: 2
            }
        }
    }
})
