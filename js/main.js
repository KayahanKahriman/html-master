jQuery(document).ready(function () {

    var siteAdresi = 'http://' + location.host;

    //Resposive Nav
    jQuery('.nav-panel').mmenu({
        extensions: [
            "effect-panels-slide-100",
            "effect-listitems-slide",
            "effect-menu-zoom",
            "effect-panels-zoom"
        ],
        navbars: [{
            height: 2,
            content: [
                '<a class="nav-panel-logo" href="/">' + '<img src="' + siteAdresi + '/images/logo.png"' + '</a>'
            ]
        }, true]
    });
    var API = $('.nav-panel').data('mmenu');

    jQuery('.toggle-nav').click(function () {
        API.open();
    });

    //Main Slider
    jQuery('.main-slider').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    //Product Slider
    jQuery('.product-carousel').owlCarousel({
        loop: true,
        margin: 0,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
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
    $('nav ul ul').filter(function () {
        if ($(this).children("li").length > 5) {
            $(this).addClass('mega-menu');
        } else {
            $(this).closest("li").addClass('position-relative');
            $(this).addClass('single-menu');
        }
    });


});