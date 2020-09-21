var active = false;

$('ul.main-menu > li > span').click(function(e) {
    target = $(e.target);
    parent = $(target.parent());
    teste(parent);
})

$('ul.main-menu > li > span').mouseenter(function(e) {
    target = $(e.target);
    parent = $(target.parent());
    if(active === true){
        teste2(parent);
    }
})


function teste(x){
    if(active){
        active = false;
        $('ul.main-menu > li').addClass('disable');
        $('ul.main-menu > li').removeClass('active');
    }else{
        active = true;
        x.removeClass('disable');
        x.addClass('active');
    }
}

function teste2(x){
    if(active === true){
        $('ul.main-menu > li').each(function(index){
            $(this).addClass('disable');
            $(this).removeClass('active');
        })

        x.removeClass('disable');
        x.addClass('active');
    }

    return;
}

$('.content').click(e => {
    active = false;
    $('ul.main-menu > li').addClass('disable');
    $('ul.main-menu > li').removeClass('active');
});