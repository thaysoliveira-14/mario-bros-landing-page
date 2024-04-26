$(document).ready(function(){
    
    //Funções para abrir e fechar o menu de cada item do header(menu)
    $("#home").hover(function(){
        $(".item__home").toggle();
    })
    $("#loja").hover(function(){
        $(".item__loja").toggle();
    })
    $("#categorias").hover(function(){
        $(".item__categorias").toggle();
    })

    //Carrossel de filmes
    $('.more__movies__carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
    });

    function toggleMovieContent(movie) {
        let content = $(movie).data('content')
        $(content).toggle()
    }

    $('.more__movies__carousel__item').hover(function() {
        toggleMovieContent(this)
    })

    $('.more__links__item').click(function(event) {
        event.preventDefault()

        $('.more__links__item').removeClass('more__links__item--is-active')
        $(this).addClass('more__links__item--is-active')

        let abaSelecionada = $(this).find("a").attr("href")
        $('.links__content').removeClass('active')
        $(abaSelecionada).addClass('active')
    })
})

