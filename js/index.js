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

$('.header__contacts-burger').click(() => {
    $('.header__contacts').slideToggle();
})

$('.present__order-btn').click(() => {
    $('.page__overlay_modal').fadeIn().css('display', 'flex')
})

$('.modal__close').click(() => {  
    $('.page__overlay_modal').fadeOut()
})