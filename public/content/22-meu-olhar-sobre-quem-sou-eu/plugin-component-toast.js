let pluginComponentToastJS = {
    /*
		-	Método responsável pela exibição do toast
		    Types [success|info|warning|error]
    */
    show: function(type, message, closeButton){
    	//Configuração
        toastr.options = {
            "closeButton": closeButton,
            "debug": false,
            "newestOnTop": true,
            "progressBar": false,
            "positionClass": "toast-top-center",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "10000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };

        //Executa o Toast
        toastr[type](message);

        //Retorna a instância do objeto
        return toastr;
    },
    /*
		-	Método responsável pela finalização de um toast específico
    */
    clear: function(toastrInstance){
        toastr.clear(toastrInstance);
    },
    /*
		-	Método responsável pela finalização de todos os toasts abertos
    */
    clearAll: function(){
    	toastr.clear();
    }
}