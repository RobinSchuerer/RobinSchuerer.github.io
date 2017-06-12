(function ($) {
    'use strict';

    /* --------------------------------------------------
     Initialization
     -------------------------------------------------- */

    // Initialize all functions when the document is ready.
    $(document).ready(function () {

        initNavbar();
        initScroller();
        initCountNbr();
        initAnimation();
        initCountdown();

        // Parallax disabled for mobile screens
        if ($(window).width() >= 1260) {
            initParallax();

            $(window).stellar({
                hideDistantElements: false
            });
        }

    });

    // Initialize functions after elements are loaded.
    $(window).load(function () {

        // Preloader
        $('.preloader img').fadeOut(); // will first fade out the loading animation
        $('.preloader').delay(350).fadeOut('slow', function () {

        });
    });

    /* --------------------------------------------------
     Navigation | Navbar
     -------------------------------------------------- */

    function initNavbar() {

        // Sticky Nav & Transparent Background
        $(window).scroll(function () {

            var nav = $('nav');
            if ($(window).scrollTop() > 20) {
                nav.removeClass('navbar-trans', 300);
                nav.removeClass('navbar-trans-dark');
                nav.addClass('navbar-small', 300);
            }
            else {
                var notMobileNav = $('nav:not(.mobile-nav)');
                notMobileNav.addClass('navbar-trans', 300);
                nav.removeClass('navbar-small', 300);

                if (nav.hasClass('trans-helper')) {
                    notMobileNav.addClass('navbar-trans-dark');
                }
            }

            $('nav:not(.navbar-fixed-top)').removeClass('navbar-trans navbar-small navbar-trans-dark');

        });


        // Nav on mobile screens
        $(window).resize(function () {
            var nav = $('nav');
            if ($(window).width() <= 1259) {
                nav.addClass('mobile-nav');
            } else {
                nav.removeClass('mobile-nav');
            }

            if (nav.hasClass('mobile-nav')) {
                nav.removeClass('navbar-trans');
                nav.removeClass('navbar-trans-dark');
            } else {
                if ($(window).width() >= 1259 && $(window).top) {
                    nav.addClass('navbar-trans');
                }
            }

            // Remove dropdown open on hover for small screens
            if (nav.hasClass('mobile-nav')) {

                $('.dropdown-toggle').on('mouseover', function (e) {
                    e.preventDefault();

                    $('.dropdown').removeClass('open');

                    e.stopPropagation();
                });
            }

            // Close mobile menu when clicked link
            // var isNotDropdown = $('nav:not(.mobile-nav)');

            var navLink = $('.nav a');
            if (!navLink.hasClass('dropdown-toggle')) {

                navLink.on('click', function () {
                    var navToggle = $('.navbar-toggle');
                    if (navToggle.css('display') !== 'none') {
                        navToggle.trigger("click");
                    }
                });

            }

        }).resize();

        // Bugfix for iOS not scrolling on open menu
        $(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});


    } // initNavbar


    /* --------------------------------------------------
     Scroll Nav
     -------------------------------------------------- */

    function initScroller() {

        $('#navbar').localScroll({
            easing: 'easeInOutExpo'
        });

        $('#page-top').localScroll({
            easing: 'easeInOutExpo'
        });
    } // initScroller


    /* --------------------------------------------------
     Parallax
     -------------------------------------------------- */


    function initParallax() {

        var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

        if (!isSafari) {
            $(".main-op").parallax("50%", 0.2);
            $(".number-counters").parallax("50%", 0.2);
            $(".cirlce-counters").parallax("50%", 0.3);
            $(".client-list-parallax").parallax("50%", 0.4);
            $(".ft-slider-parallax").parallax("50%", 0.4);
            $(".testimonials-parallaxx").parallax("50%", 0.4);
            $(".twitter-slider").parallax("50%", 0.4);
            $(".login-2").parallax("50%", 0.2);
        }
    }

    /* --------------------------------------------------
     Number Counters
     -------------------------------------------------- */

    function initCountNbr() {
        new Waypoint({
            element: document.getElementById('counters'),
            handler: function () {

                var options = {
                    useEasing: true,
                    useGrouping: true,
                    separator: ','
                };
                // Counter 1
                var counter1 = new CountUp('count-1', 0, 9, 0, 0.1, options);
                counter1.start();
                // Counter 2
                var counter2 = new CountUp('count-2', 0, 2835, 0, 3, options);
                counter2.start();
                // Counter 3
                var counter3 = new CountUp('count-3', 0, 46930, 0, 3, options);
                counter3.start();
                // Counter 4
                var counter4 = new CountUp('count-4', 0, 8634, 0, 3, options);
                counter4.start();
                // init only once
                this.destroy();
            },
            offset: '80%'
        });

    } // initCountNbr


    /* --------------------------------------------------
     Contact Pages
     -------------------------------------------------- */

    $('.show-map').on('click', function (e) {
        e.preventDefault();
        $('.contact-info-wrapper').toggleClass('map-open');
        $('.show-info-link').toggleClass('info-open');
    });

    $('.show-info-link').on('click', function (e) {
        e.preventDefault();
        $('.contact-info-wrapper').toggleClass('map-open');
        $(this).toggleClass('info-open');
    });


    /* ------------------------------------------------^--
     Animation
     -------------------------------------------------- */

    function initAnimation() {

        new WOW().init();

    }

    /* --------------------------------------------------
     Coming Soon - Countdown
     -------------------------------------------------- */

    function initCountdown() {

        var countdown = $('#cs-timer');
        var hasCountdown = countdown.hasClass('cs-timer');

        if (hasCountdown) {

            // Add end date here (current: 2017/01/01) from witch the timer will countdown.
            countdown.countdown('2017/01/01', function (event) {
                $(this).html(event.strftime('<div class="item"><span class="nbr-timer">%D</span><span class="title-timer">Days<span></div><div class="item"><span class="nbr-timer">%H</span><span class="title-timer">Hours<span></div><div class="item"><span class="nbr-timer">%M</span><span class="title-timer">Minutes<span></div><div class="item"><span class="nbr-timer">%S</span><span class="title-timer">Seconds<span></div>'));
            });

        }

    }

})(jQuery);
