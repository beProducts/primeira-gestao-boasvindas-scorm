let pluginComponentDialogJS = {
    /**
     * Exibe facilmente um alerta estilizado e mais funcional do que o tradicional alert
     *
     * @author Fernando Nunes <onlyfernando@gmail.com>
     * @link http://craftpip.github.io/jquery-confirm/
     * @param string   title                 Obrigatório Título do alerta
     * @param string   content               Obrigatório Desccrição/conteúdo do alerta
     * @param string   buttonText            Opcional    Texto do botão de confirmação
     * @param function callBackConfirm       Opcional    Função a ser executada caso o botão de confirmação seja pressionado
     * @param function callBackCancel        Opcional    Função a ser executada caso o botão de cancelamento seja pressionado
     * @param boolean  important             Opcional    Caso verdadeiro exibe o modal de forma a dar ênfase a uma importante decisão
     * @param boolean  backgroundDismiss     Opcional    Caso verdadeiro permite o alerta ser fechado cliando fora da sua superfície
     * @param string   iconClass             Opcional    Classe CSS do ícone do alerta
     * @param string   btnConfirmClass       Opcional    Classe CSS do botão de confirmação do alerta
     * @param string   btnCancelClass        Opcional    Classe CSS do botão de cancelamento do alerta
     * @param string   sizeDialogClass       Opcional    Classe CSS de formatação do tamanho e centarlização do alerta
     * @param integer  autoCloseConfirmValue Opcional    Valor inteiro em milisegundos para o tempo de ativação automática do botão de confirmação
     * @return void
    */
    alert: function(title, content, buttonText, callBackConfirm, callBackCancel, important, backgroundDismiss, iconClass, btnConfirmClass, sizeDialogClass, autoCloseConfirmValue){
        //Defaults
        if(buttonText == null) buttonText = "OK";
        if(iconClass == null) iconClass = "fa fa-warning";
        if(btnConfirmClass == null) btnConfirmClass = "btn-default";
        if(sizeDialogClass == null) sizeDialogClass = "col-md-4 col-md-offset-4";
        if(backgroundDismiss == null) backgroundDismiss = false;
        if(important == null) important == false;
        //
        var theme = (important) ? 'supervan' : 'white';
        //
        if(typeof autoCloseConfirmValue === 'number'){
            autoClose = 'confirm|'+autoCloseConfirmValue
        }else{
            autoClose = false;
        }

        //Instance
        $.alert({
            title: title,
            content: content,
            confirmButton: buttonText,
            theme: theme,
            backgroundDismiss: backgroundDismiss,
            autoClose: autoClose,
            icon: iconClass,
            confirmButtonClass: btnConfirmClass,
            columnClass: sizeDialogClass,
            keyboardEnabled: true,
            confirmKeys: [13,32], //Enter and Space
            cancelKeys: [27], //ESC
            confirm: function(){
                if(typeof callBackConfirm == 'function') callBackConfirm.call();
            },
            cancel: function(){
                if(typeof callBackCancel == 'function') callBackCancel.call();
            }
        });
    },
    /**
     * Exibe facilmente um box de confirmação estilizado e mais funcional do que o tradicional confirm
     *
     * @author Fernando Nunes <onlyfernando@gmail.com>
     * @link http://craftpip.github.io/jquery-confirm/
     * @param string   title                 Obrigatório Título do alerta
     * @param string   content               Obrigatório Desccrição/conteúdo do alerta
     * @param string   btnConfirmText        Opcional    Texto do botão de confirmação
     * @param string   btnCancelText         Opcional    Texto do botão de cancelamento
     * @param function callBackConfirm       Opcional    Função a ser executada caso o botão de confirmação seja pressionado
     * @param function callBackCancel        Opcional    Função a ser executada caso o botão de cancelamento seja pressionado
     * @param boolean  important             Opcional    Caso verdadeiro exibe o modal de forma a dar ênfase a uma importante decisão
     * @param boolean  backgroundDismiss     Opcional    Caso verdadeiro permite o alerta ser fechado cliando fora da sua superfície
     * @param string   iconClass             Opcional    Classe CSS do ícone do alerta
     * @param string   btnConfirmClass       Opcional    Classe CSS do botão de confirmação do alerta
     * @param string   sizeDialogClass       Opcional    Classe CSS de formatação do tamanho e centarlização do alerta
     * @param integer  autoCloseConfirmValue Opcional    Valor inteiro em milisegundos para o tempo de ativação automática do botão de confirmação
     * @param integer  autoCloseCancelValue  Opcional    Valor inteiro em milisegundos para o tempo de ativação automática do botão de cancelar
     * @return void
    */
    confirm: function(title, content, btnConfirmText, btnCancelText, callBackConfirm, callBackCancel, important, backgroundDismiss, iconClass, btnConfirmClass, btnCancelClass, sizeDialogClass, autoCloseConfirmValue, autoCloseCancelValue){
        //Defaults
        if(btnConfirmText == null) btnConfirmText = "OK";
        if(btnCancelText == null) btnCancelText = "Cancel";
        if(iconClass == null) iconClass = "fa fa-warning";
        if(btnConfirmClass == null) btnConfirmClass = "btn-default";
        if(btnCancelClass == null) btnCancelClass = "btn-default";
        if(sizeDialogClass == null) sizeDialogClass = (important) ? "col-md-4 text-center" : "col-md-4 col-md-offset-4 col l4 offset-l4";
        if(backgroundDismiss == null) backgroundDismiss = false;
        if(important == null) important == false;
        //
        var theme = (important) ? 'supervan' : 'white';
        //
        var autoClose;
        if(autoCloseConfirmValue == null && autoCloseCancelValue == null){
            autoClose = false;
        }else{
            if(typeof autoCloseConfirmValue === 'number'){
                autoClose = 'confirm|'+autoCloseConfirmValue
            }else{
                if(typeof autoCloseCancelValue === 'number'){
                    autoClose = 'cancel|'+autoCloseCancelValue
                }
            }
        }

        //Instance
        $.confirm({
            title: title,
            content: content,
            confirmButton: btnConfirmText,
            cancelButton: btnCancelText,
            theme: theme,
            backgroundDismiss: backgroundDismiss,
            autoClose: autoClose,
            icon: iconClass,
            confirmButtonClass: btnConfirmClass,
            cancelButtonClass: btnCancelClass,
            columnClass: sizeDialogClass,
            keyboardEnabled: true,
            confirmKeys: [13,32], //Enter and Space
            cancelKeys: [27], //ESC
            confirm: function(){
                if(typeof callBackConfirm == 'function') callBackConfirm.call();
            },
            cancel: function(){
                if(typeof callBackCancel == 'function') callBackCancel.call();
            }
        });
    },
    /**
     * Exibe facilmente um box de informação estilizado
     *
     * @author Fernando Nunes <onlyfernando@gmail.com>
     * @link http://craftpip.github.io/jquery-confirm/
     * @param string   title                 Obrigatório Título do alerta
     * @param string   content               Obrigatório Desccrição/conteúdo do alerta
     * @param boolean  important             Opcional    Caso verdadeiro exibe o modal de forma a dar ênfase a uma importante decisão
     * @param boolean  backgroundDismiss     Opcional    Caso verdadeiro permite o alerta ser fechado cliando fora da sua superfície
     * @param string   iconClass             Opcional    Classe CSS do ícone do alerta
     * @param string   sizeDialogClass       Opcional    Classe CSS de formatação do tamanho e centarlização do alerta
     * @param function callBackCancel        Opcional    Função a ser executada caso o botão de cancelamento seja pressionado
     * @return void
    */
    info: function(title, content, important, backgroundDismiss, iconClass, sizeDialogClass, callBackCancel){
        //Default
        if(important == null) important == false;
        if(iconClass == null) iconClass = "fa fa-warning";
        if(sizeDialogClass == null) sizeDialogClass = "col-md-4 col-md-offset-4";
        if(backgroundDismiss == null) backgroundDismiss = false;
        //
        var theme = (important) ? 'supervan' : 'white';

        //Instance
        $.dialog({
            title: title,
            content: content,
            theme: theme,
            backgroundDismiss: backgroundDismiss,
            icon: iconClass,
            columnClass: sizeDialogClass,
            keyboardEnabled: true,
            cancelKeys: [27], //ESC
            cancel: function(){
                if(typeof callBackCancel == 'function') callBackCancel.call();
            }
        });
    }
}