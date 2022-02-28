$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});

window.onload = function(){
    document.querySelectorAll("[data-nav]").forEach(function(element){
        if(element.href === document.location.href){
            element.classList.add("active-menu");
        }
    })
}