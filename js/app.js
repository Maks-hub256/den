//animate wow
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       200,          // default
    mobile:       false,       // default
    live:         true        // default
}
)
wow.init();

//jQuery
$(window).ready(function() {
    if ($(window).width() <= '500'){
        $('.sub-header__img').attr("src", "img/mobilephoto.png")
    } else {
        $('.sub-header__img').attr("src", "img/DeckstopDenis.png")
    }
})

//burger
$(".sub-header__burger-area").on('click', function(){
    $(".header__navbar").toggleClass("header__navbar-active")//navbar
    $("body").toggleClass("fix-active")// fix screen
    $("html").toggleClass("fix-active")// fix screen
    $(".sub-header__burger-line").toggleClass("sub-header__burger-line-active")
})
//close burger
$(".header__link").on('click', function() {
    $(".header__navbar").toggleClass("header__navbar-active") //navbar
    $("body").toggleClass("fix-active")// fix screen
    $("html").toggleClass("fix-active")// fix screen
    $(".sub-header__burger-line").toggleClass("sub-header__burger-line-active")
})
