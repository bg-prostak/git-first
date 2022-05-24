$(document).ready(function(){
    $('.menu-burger').click(function(event){
        $('.menu-burger,.section-header__container').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function() {
    $('.section-header__container').click(function(event) {
        $('.menu-burger,.section-header__container').removeClass('active');
        $('body').removeClass('lock')
    });
});