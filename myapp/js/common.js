$(function() {

	// Custom JS

});



document.addEventListener('DOMContentLoaded', function(){
//go-top
    // if (document.querySelector('#go-top') != null) {
    //     let toTop = document.querySelector('#go-top');
    
    //     window.onscroll = function () {
    //         if (window.pageYOffset > 160) {
    //             toTop.style.display = 'block';
    //         } else {
    //             toTop.style.display = "none";
    //         }
    //     }   
    // }
    //menu
    var menu = document.querySelector('.menu-toggle');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');
        var navGamb = document.querySelector('.menu-toggle');
        navGamb.classList.toggle('active');
    });


//scrolling
    var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.25; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
    for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset, // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
            window.scrollTo(0, r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash // URL с хэшем
            }
        }
    }, false);
}


});