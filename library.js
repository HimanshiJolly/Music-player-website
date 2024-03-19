$(document).ready(function(){

    $('.button').click(function(){
        $(this).addclass('active').siblings().removeclass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.image').show(400);
        }
        else{
            $('.image').not('.'+filter).hide(200);
            $('.image').filter('.'+filter).show(200);
        }
    
    });

    $('.gallery').magnificpopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true,
        }
    });
    
});