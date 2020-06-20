let pluginComponentTabsJS = {
    instante: null,
    init: function(){
        // Init Collapses
        let elements = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elements, {
            onOpenEnd: function(){
                let position = $(".tab-container div:not(.hide) > div > ul > li.active > div.collapsible-header").offset().top - 55;
                $("html, body").animate({ scrollTop: position }, "slow");
            }
        });
    },
    goToTab: function(element, tabId){
        // Omite todas as abas
        $(".tab-container > div").addClass('hide');
        $(".tabs li a").removeClass('active');

        // Ativa o menu
        $(element).addClass('active');

        // Ativa o container
        let target = $(element).attr('data-target');
        $(target).removeClass('hide');

        // Rola a página
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
}
pluginComponentTabsJS.init();