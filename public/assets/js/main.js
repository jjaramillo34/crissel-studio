(function($) {
    "use strict";

    var $tabs = $('.nav-month li');
    var flagscroll = true;

    $(window).scroll(function() {
        var y = $(window).scrollTop();
        if (y > 4000 && flagscroll == true) {
            flagscroll = false;
            $('.home-stats').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });

    $('.acerca-stats').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $(".servicios-gallery > .row").slice(0, 3).show();

    $("a,section,div,span,li,input[type='text'],input[type='button'],tr,button").on("click", function() {

        if ($(this).hasClass("month-prev")) {
            $tabs.filter('.active').prev('li').find('a[data-toggle="tab"]').tab('show');
            return false;
        }

        if ($(this).hasClass("month-next")) {
            $tabs.filter('.active').next('li').find('a[data-toggle="tab"]').tab('show');
            return false;
        }

        if ($(this).hasClass("available")) {
            $(".calendar .calendar-body ul li .selected").removeClass("selected").addClass("available");
            $(this).addClass('selected');
        }

        if ($(this).hasClass("time-available")) {
            $(".calendar .calendar-footer ul li .time-selected").removeClass("time-selected").addClass("time-available");
            $(this).addClass('time-selected');
        }

        if ($(this).hasClass("load-more")) {
            $(".servicios-gallery > .row:hidden").slice(0, 1).slideDown();
            if ($(".servicios-gallery > .row:hidden").length == 0) {
                $(".load-more").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top - 200
            }, 1500);
        }

        if ($(this).hasClass("closecanvas")) {
            $("body").removeClass("offcanvas-stop-scrolling");
        }

        if ($(this).hasClass("accordion-link")) {
            $(this).addClass('selected');
        }


    });

    $('.responsive-tabs').responsiveTabs({
        accordionOn: ['xs']
    });

    $('.loop').owlCarousel({
        center: true,
        loop: true,
        autoplay: true,
        margin: 0,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            960: {
                items: 6
            },
            1200: {
                items: 6
            }
        }
    });



})(jQuery);