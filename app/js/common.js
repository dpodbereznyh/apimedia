$(document).ready(function () {
    $(function() {
        $('#main-menu').smartmenus({
            mainMenuSubOffsetX: -1,
            mainMenuSubOffsetY: 4,
            subMenusSubOffsetX: 6,
            subMenusSubOffsetY: -6
        });
    });

// SmartMenus mobile menu toggle button
    $(function() {
        var $mainMenuState = $('#main-menu-state');
        if ($mainMenuState.length) {
            // animate mobile menu
            $mainMenuState.change(function(e) {
                var $menu = $('#main-menu');
                if (this.checked) {
                    $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
                } else {
                    $menu.show().slideUp(250, function() { $menu.css('display', ''); });
                }
            });
            // hide mobile menu beforeunload
            $(window).bind('beforeunload unload', function() {
                if ($mainMenuState[0].checked) {
                    $mainMenuState[0].click();
                }
            });
        }
    });

    // для плавного перехода по якорям
    $(".yakor").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top -80;
        $('body,html').animate({scrollTop: top}, 500);
    });

    $(".js-callback").on( "click", function() {
        var newtitle = $(this).attr("data-title");
        var newinput = $(this).attr("data-input");
        $(".js-title").html(newtitle);
        $(".js-zakaz").val(newinput);
    });


    $("#popup-form").submit(function(){
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize()
        }).done(function() {
            // $(this).find("input").val("");
            parent.jQuery.fancybox.getInstance().close();
            $.fancybox.open({
                src: '#fancyalert',
            });
            $("#popup-form").trigger("reset");
        });
        return false;
    });
    $(".footer__form").submit(function(){
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize()
        }).done(function() {
            $.fancybox.open({
                src: '#fancyalert',
            });
            $(".footer__form").trigger("reset");
        });
        return false;
    });


});
// Customers Swiper Slider
var customersSlider = new Swiper ('.customers__swiper-container', {
    slideClass: 'customers__swiper-slide',
    wrapperClass: 'customers__swiper-wrapper',
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
        el: '.customers__swiper-pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'customers__swiper_bullet',
        bulletActiveClass: 'customers__swiper_bullet-active'
    },
    navigation: {
        nextEl: '.customers__slider_button-next',
        prevEl: '.customers__slider_button-prev',
    }
});

//Certificates
var certificatesSlider = new Swiper ('.certificates__swiper-container', {
    slideClass: 'certificates__swiper-slide',
    wrapperClass: 'certificates__swiper-wrapper',
    slidesPerView: 2,
    spaceBetween: 16,
});