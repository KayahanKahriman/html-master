jQuery(document).ready(function () {

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

    //Resposive Nav
    jQuery('.nav-panel').mmenu({
        extensions: [
            "effect-panels-slide-100",
            "effect-listitems-slide"
        ]
    });
    var API = jQuery('.nav-panel').data('mmenu');

    jQuery('.toggle-nav').click(function () {
        API.open();
    });

    //SVG Color
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

    //Mega Menü
    jQuery('nav ul ul').filter(function () {
        if ($(this).children("li").length > 5) {
            $(this).addClass('mega-menu');
        } else {
            $(this).closest("li").addClass('position-relative');
            $(this).addClass('single-menu');
        }
    });

});