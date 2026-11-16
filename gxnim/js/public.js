jQuery(function () {
	$(".imgBg").each(function (index, element) {$(this).css("background-image", "url(" + $(this).find("img").attr("src") + ")")});
	//mobile-nav-open
	$(".navBtn").click(function(){
        $(".navBtn").stop(true, false).toggleClass("active");
		$(".navBox").stop(true, false).slideToggle();
        $(".header").toggleClass("bg");
        $(".navRig li.navSearch").removeClass('m-open');
        $(".navSearchBox").stop().slideUp();
	})
    // mobile-nav-search
    $(".navRig li.navSearch").click(function(){        
        if ($(window).width() <= 1200) {
            $(this).toggleClass('m-open')
            $(".navSearchBox").stop().slideToggle();

            $(".navBtn").removeClass("active")
            $(".header").removeClass("bg")
            $(".navBox").stop(true, false).slideUp();
        }
    })
    $(".navSearchBox").click(function(e){
        e.stopPropagation()
    })
    // 一级下拉
	$('.navList > li:has( > .nav-dropdown)').addClass('dropdown');
	$(".navList > li").hover(function (e) {
        if ($(window).width() > 1200) {
            $(this).addClass('cur')
            $(this).children(".nav-dropdown").stop(true, false).slideDown();
            e.preventDefault();
        }
    },function(e){
        if ($(window).width() > 1200) {
            $(this).removeClass('cur')
            $(this).children(".nav-dropdown").stop(true, false).slideUp();
            e.preventDefault();
        }
    });

    $(".navList > li.dropdown > a").click(function (e) {
        if ($(window).width() <= 1200) {
            if($(this).parent().hasClass('cur')){
                $(this).parent().removeClass('cur')
                $(this).parent().children(".nav-dropdown").slideUp(150);
            }else{
                $(".navList > li.dropdown").removeClass('cur')
                $(".nav-dropdown").slideUp(150);
                $(this).parent().addClass('cur')
                $(this).parent().children(".nav-dropdown").slideDown(150);
            }
            e.preventDefault();
        }
    });
    addIco($(".nav-dropdown-list > li"));
    menuToggle($(".nav-dropdown-list .m-dropdown > a"))
    
    $("#top").click(function(){
        $('html , body').animate({scrollTop: 0},'slow');
    })
    $(window).scroll(function() {
        var scroHei = $(window).scrollTop();//滚动的高度
        if (scroHei > 100) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    })

    $(".footNav li h3").each(function(){
        if($(this).next('.footCon').length > 0){
            $(this).find('i').addClass('show');
        }
    })
    $(".footNav li h3 i").click(function(){
        $(this).parent().toggleClass('active');
        $(this).parent().next().stop().slideToggle();
    })

    // banner 鼠标样式
    // var cursor = document.getElementById('cursor');
    // //1.无脑写缓动动画公式
    // var leaderX = 0, leaderY = 0;
    // var targetX = 0, targetY = 0;
    // document.getElementById('banner') && document.getElementById('banner').addEventListener('mousemove',function(e){
    //     var evt = event || window.event;
    //     targetX = evt.clientX - cursor.offsetWidth / 2;
    //     targetY = evt.clientY - cursor.offsetHeight / 2;
    //     cursor.classList.add('cursor-drag');
    // })
    // document.getElementById('banner') && document.getElementById('banner').addEventListener('mouseout',function(e){
    //     cursor.classList.remove('cursor-drag');
    // })
    // document.getElementById('banner') &&  setInterval(function(){
    //     leaderX = leaderX + (targetX - leaderX) / 10;
    //     leaderY = leaderY + (targetY - leaderY) / 10;
    //     cursor.style.left = leaderX + 'px';
    //     cursor.style.top = leaderY + 'px';
    // }, 10);

    // 平滑滚动
    // if($("#smooth-box").length){
    //     luxy.init({
    //         wrapper:'#smooth-box',
    //         targets:'.smooth'
    //     });
    // }
    // 线条
    // gsap.registerPlugin(ScrollTrigger);

    // if($(".hm1Bg").length){
    //     gsap.set(".hm1Line", {height: 0});
    //     let line = gsap.timeline({scrollTrigger: {
    //         trigger: ".hm1Bg",
    //         start: "top center",
    //         scrub: true
    //     }})
    //     line.to(".hm1Line", {duration: 1, height: '100%', ease: "power1.out"})
    // }

    // if($(".comBg4").length){
    //     gsap.set(".com4Line", {width: 0});
    //     let line2 = gsap.timeline({scrollTrigger: {
    //         trigger: ".comBg4",
    //         start: "5% center",
    //         end:'+=200',
    //         scrub: true
    //     }})
    //     line2.to('.com4Line', {duration: 1, width: '100%', ease: "power1.out"})
    // }
    // 拆分插入i
    splitText('.hmEn');

    tel();
    
    
})

function addIco(event){
    event.each(function(){
        if($(this).children("ul").length){
            $(this).addClass('m-dropdown');
            addIco($(this).children("ul").children("li"));
        }
    })
}
function menuToggle(event){
    event.click(function(e){
        if ($(window).width() <= 1200) {
            if($(this).next("ul").is(":visible")){
                $(this).next("ul").slideUp();
                $(this).parent().removeClass("m-open")
            }else{
                $(this).next("ul").slideDown().parent().siblings().children("ul").slideUp();
                $(this).parent().addClass("m-open").siblings().removeClass("m-open");
            }
            e.preventDefault();
        }
    })
}
function menuToggle2(event){
    event.click(function(e){
        if($(this).next("ul").is(":visible")){
            $(this).next("ul").slideUp();
            $(this).parent().removeClass("m-open")
        }else{
            $(this).next("ul").slideDown().parent().siblings().children("ul").slideUp();
            $(this).parent().addClass("m-open").siblings().removeClass("m-open");
        }
        e.preventDefault();
    })
}

function splitText(event){
    $(event).each(function(){
        var arr = $(this).find('span').html().split(' ');
        var text = '';
        arr.forEach((element,index) => {
            console.log(element,index)
            if(index != (arr.length - 1)){
                text += element + '<i></i>'
            }else{
                text += element
            }
        });
        $(this).find('span').html(text);
    })
}

function mobile(){
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        return true
    }
}

function tel(){
    if (!mobile()) {
        $('a').each(function(){
            if($(this).attr('href').indexOf('tel:') != -1){
                $(this).css('cursor','auto')
                $(this).click(function(e){
                    e.preventDefault();
                })
            }
        })
    }
}