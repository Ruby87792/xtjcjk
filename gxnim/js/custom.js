jQuery(function () {    
    var banner = new Swiper('.banner .swiper-container',{
		// loop: true,
        autoplay: {
            delay: 6000,
            waitForTransition: false,
            disableOnInteraction: false
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        speed:1000,
        slidesPerView: 1,
        parallax : true,
        watchOverflow: true,
        resistance: true,
        resistanceRatio: 0,
        observer: true,
        observeParents: true,
        centerInsufficientSlides: true,
        watchSlidesVisibility: true,
        
        pagination: {
            el: '.banner .ban-pagination',
            clickable: true
        },
        on: {
            init: function(){
                swiperAnimateCache(this);
                swiperAnimate(this);
            }, 
            slideChangeTransitionEnd: function(){ 
                swiperAnimate(this);
            }
        }
    })

    $(".box2Blue").length && $(".box2Blue").css('width',$(".box2Right .box2Img").offset().left);
    var box2Left = new Swiper('.box2Left .swiper-container', {
        loop: true,
        speed: 500,
        spaceBetween: '1.3%',
        slidesPerView: 1,
        watchOverflow: true,
        resistanceRatio: 0,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.box2Left .swiper-pagination',
            clickable: true
        }
    })
    var box2Right = new Swiper('.box2Right .swiper-container', {
        speed: 500,
        spaceBetween: '1.3%',
        slidesPerView: 1,
        watchOverflow: true,
        resistanceRatio: 0,
        observer: true,
        observeParents: true,
        navigation: {
            prevEl: '.box2Right .box2Prev',
            nextEl: '.box2Right .box2Next',
        },
    })
    $(".box3List li").each(function(index){$(this).attr('data-wow-delay', index / 5 + 0.3 +'s')})

    $(".box4List li").each(function(index){
        $(this).attr('data-wow-delay', index / 5 + 0.3 +'s');
        if(index%4 == 0){
            $(this).addClass('box4Li1')
        }else if(index%4 == 1){
            $(this).addClass('box4Li2')
        }else if(index%4 == 2){
            $(this).addClass('box4Li3')
        }else{
            $(this).addClass('box4Li4')
        }

    })

    $(".box5List li").each(function(index){$(this).attr('data-wow-delay', index / 5 + 0.3 +'s')})
    $(".box6List li").each(function(index){$(this).attr('data-wow-delay', index / 5 + 0.3 +'s')})
    $(".box7List li").each(function(index){$(this).attr('data-wow-delay', index / 10 + 0.3 +'s')})

    
    var box8List = new Swiper($('.box8List .swiper-container'),{
        loop: true,
        autoplay: {
            delay: 3000,
            waitForTransition: false,
            disableOnInteraction: false
        },
        slidesPerView: 2,
        spaceBetween:'2.2%',
        resistance: true,
        resistanceRatio: 0,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        runCallbacksOnInit : false,
        navigation: {
            prevEl: '.box8List .box8Prev',
            nextEl: '.box8List .box8Next',
        },
        pagination: {
            el: '.box8List .swiper-pagination',
            clickable: true
        },
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            640: {
                slidesPerView: 3
            }
        }
    })
    
    $(".box9List").each(function(){
        var $that = $(this);
        new Swiper($that.find(".swiper-container"),{
            autoplay: {
                delay: 3000,
                waitForTransition: false,
                disableOnInteraction: false
            },
            slidesPerView: 2,
            spaceBetween:'.78%',
            resistance: true,
            resistanceRatio: 0,
            observer: true,
            observeParents: true,
            watchOverflow: true,
            runCallbacksOnInit : false,
            pagination: {
                el: $(this).find('.swiper-pagination'),
                clickable: true,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4
                },
                640: {
                    slidesPerView: 3
                }
            }
        })
    })

    $('.shareList').share({ sites: ['wechat', 'weibo', 'qq'] });

    $(window).resize(function(){
        $(".box2Blue").length && $(".box2Blue").css('width',$(".box2Right .box2Img").offset().left);
    })

})