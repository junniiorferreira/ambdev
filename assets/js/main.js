/*$(function() {
    $('.vegas').vegas({
        slides: [
            { src: 'assets/images/slideshow/slide1.png', titleColor:"#ffffff", capColor:"#ffffff", slideTitle: "Cemitério Paciencia", slideCaption: "Funcionamento 24h, Infraestrutura completa e 8 capelas, tudo isso em uma área privilegiada a 20 min da Barra da Tijuca." },
            { src: 'assets/images/slideshow/slide2.png', titleColor:"#323232", capColor:"#646464", slideTitle: "Plano Funeral PLAMOR", slideCaption: "Conheça o mais completo e abrangente plano de assistência do mercado." }
        ],
        overlay: 'assets/images/overlays/06.png',
        cover: true,
        //Desativar o autoplay se precisar debugar.
        autoplay: true,
        timer: false
    });
}); */

$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    $('#tabs').tabulous({
        effect: 'slideLeft'
    });

    $('.dropdown-form').click(function(){
        $('.tab-container').slideToggle();
        $('.tab-container').css("display","flex");
        $('.dropdown-form i').toggleClass('animate-rotate')
    });

    $('.dropdown-endereco').click(function(){
        $('.mobile-dropdown').slideToggle();
        $('.mobile-dropdown').css("display","flex");
        $('.dropdown-endereco i').toggleClass('animate-rotate')
    });    

    /* $('.tab-action').click(function(){
        $('.tab-container').slideToggle();       
    });  */

});