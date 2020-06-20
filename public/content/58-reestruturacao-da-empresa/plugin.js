let pluginCollapsibleJS = {
    init: function(){
        $(".collapsible-header").on('click', function(event){
            event.preventDefault();
            let $container = $(this).next();

            if($container.css('display') == 'none'){
                $container.slideDown();
            }else{
                $container.slideUp();
            }
        })
    }
}
pluginCollapsibleJS.init();