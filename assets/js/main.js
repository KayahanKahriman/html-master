jQuery(document).ready(function () {

    /** Swiper Start */
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    /** Swiper End */

    /** Resposive Nav Start */
    jQuery('.mobile-nav').mmenu({
        extensions: [
            "effect-panels-slide-100",
            "effect-listitems-slide"
        ]
    });
    var API = jQuery('.mobile-nav').data('mmenu');
    jQuery('.toggle-nav').click(function () {
        API.open();
    });
    /** Responsive Nav End */

    /** Mega Menu Start */
    jQuery('nav ul ul').filter(function () {
        if ($(this).children("li").length > 5) {
            $(this).addClass('mega-menu');
        } else {
            $(this).closest("li").addClass('position-relative');
            $(this).addClass('single-menu');
        }
    });
    /** Mega Menu End */
});