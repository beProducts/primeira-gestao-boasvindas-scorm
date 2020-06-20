let pluginJS = {
    userData: null,
    startDate: new Date(),
    timeElapsed: 0,
    timeSpentOnPlugin: 0,
    init: function(){
        pluginJS.initUser();
        pluginJS.saveVisit();
        pluginJS.saveVisitEnd();
        pluginJS.setWatched();
        //
        pluginComponentFormJS.init();
        //
        pluginComponentHelperJS.init();
        pluginComponentNavigationJS.init();
        pluginCommentComponentJS.init();
    },
    initUser: function(){
        pluginJS.userData = localStorage.user || null;
        if(pluginJS.userData != undefined){
            pluginJS.userData = JSON.parse(pluginJS.userData);
        }else{
            // !!! Alternative method !!!

            // User Data
            let basicData = document.querySelector(".login-icon .avatar").style.backgroundImage;
            let tmpData  = basicData.match(/^url\(\"htt(?:ps|p):\/\/(?:[^\/]+)\/(?:[^\/]+)\/(?:[^\/]+)\/([^\/]+)\/([^\/]+)\/([^\/]+)\/\"\)$/);
            let tempData2 = basicData.match(/^url\(\"(.*)\"\)$/);

            // vars
            let userName = document.querySelector(".login .login-text").innerHTML;
            let userImage = tempData2[1];
            let appId = tmpData[2];
            let userId = tmpData[3];

            // Set user config
            pluginJS.userData = {
                'userId': userId,
                'name' : userName,
                'urlPhoto' : userImage
            }
        }
    },
    saveVisit: function(){
        $.ajax({
            method: "POST",
            url: pluginSettings.endpoint+'/saveVisit',
            dataType: "json",
            data: {
                'userId'   : pluginJS.userData.userId,
                'appId'    : pluginSettings.appId,
                'pluginId' : pluginSettings.pluginId,
                'userName' : pluginJS.userData.name,
                'userImage': pluginJS.userData.urlPhoto,
                'userLogin' : pluginJS.userData.login,
                'userEmail' : pluginJS.userData.email
            }
        })
        .done(function(returnData){
            if(returnData.result == false){
                $(document.body).empty().append("<div class='container'></div>");
                $(".container").html(returnData.errorMessage);
            }
        })
        .fail(function(jqXHR, textStatus){
            pluginComponentToastJS.show("error", "Ops...deu algo errado. Tente novamente mais tarde.");
        });
    },
    saveVisitEnd: function(){
        // Continuous post status
        setInterval(function(){
            if(!document.hidden){
                pluginJS.timeSpentOnPlugin++;
            }
        },1000);
        setInterval(function(){
            if(!document.hidden){
                $.ajax({
                    method: "POST",
                    url: pluginSettings.endpoint+'/saveUserTimeElapsed',
                    dataType: "json",
                    data: {
                        'userId'      : pluginJS.userData.userId,
                        'appId'       : pluginSettings.appId,
                        'pluginId'    : pluginSettings.pluginId,
                        'timeElapsed' : pluginJS.timeSpentOnPlugin
                    }
                });
            }
        }, 10000);

        // Out of page
        document.addEventListener('visibilitychange', function(event) {
            if(document.hidden) {
                const endDate = new Date();
                const spentTime = endDate.getTime() - pluginJS.startDate.getTime();
                pluginJS.timeElapsed += spentTime;
            }else{
                pluginJS.startDate = new Date();
            }
        });

        // End visit
        $(window).on("beforeunload", function(){
            const endDate = new Date();
            const spentTime = endDate.getTime() - pluginJS.startDate.getTime();
            pluginJS.timeElapsed += spentTime;

            $.ajax({
                method: "POST",
                url: pluginSettings.endpoint+'/saveUserExit',
                dataType: "json",
                data: {
                    'userId'      : pluginJS.userData.userId,
                    'appId'       : pluginSettings.appId,
                    'pluginId'    : pluginSettings.pluginId,
                    'timeElapsed' : Math.floor(pluginJS.timeElapsed / 1000)
                },
                async: false
            });
        });
    },
    setWatched: function(){
        setInterval(function(){
            if(pluginJS.timeSpentOnPlugin == 30){
                $.ajax({
                    method: "POST",
                    url: pluginSettings.endpoint+'/setWatched',
                    dataType: "json",
                    data: {
                        'userId'   : pluginJS.userData.userId,
                        'appId'    : pluginSettings.appId,
                        'pluginId' : pluginSettings.pluginId
                    }
                })
                .done(function(returnData){
                    if(returnData.result == true){}
                })
                .fail(function(jqXHR, textStatus){
                    pluginComponentToastJS.show("error", "Ops...deu algo errado. Tente novamente mais tarde.", true);
                });
            }
        }, 1000);
    },
    goToPage: function(destination){
        window.parent.document.location = destination;
    }
}

let pluginComponentDownloadJS = {
    download: function(event){
        // Cancel default event
        event.preventDefault();

        // Convert to canvas
        let $container = $('main');
        let containerW = 800; //$container.outerWidth();
        let containerH = 1892; //$container.outerHeight();

        pluginComponentDownloadJS.screenshot([$("main").get(0)], {
            'width': containerW,
            'height': containerH
        }).then(function(canvas){
            // Get image data
            let imgData = canvas.toDataURL('image/png');

            // Export to PDF
            let doc = new jsPDF('p','mm', [containerW * 0.26, containerH * 0.26]);
            doc.addImage(imgData, 'PNG', 0, 0);

            if(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
                window.open(doc.output('bloburl'));
            }else {
                doc.save('o-que-ja-sei-sobre-mim.pdf');
            }
        });
    },
    screenshot: function(element, options = {}) {
        // Our cropping context
        let cropper = document.createElement('canvas').getContext('2d');

        // Save the passed width and height
        let finalWidth = options.width || window.innerWidth;
        let finalHeight = options.height || window.innerHeight;

        // Update the options value so we can pass it to h2c
        if(options.x) {
            options.width = finalWidth + options.x;
        }
        if(options.y) {
            options.height = finalHeight + options.y;
        }

        // Chain h2c Promise
        return html2canvas(element, options).then(c => {
            // Do our cropping
            cropper.canvas.width = finalWidth;
            cropper.canvas.height = finalHeight;
            cropper.drawImage(c, -(+options.x || 0), -(+options.y || 0));

            // Return our canvas
            return cropper.canvas;
        });
    }
}

let pluginComponentFormJS = {
    init: function(){
        pluginComponentFormJS.getQuestions();
    },
    initFormPlugins: function(){
        let elems = document.querySelectorAll('main select');
        let instances = M.FormSelect.init(elems, {});
        //
        M.updateTextFields();
        //
        $('textarea').each(function(index, element){
            M.textareaAutoResize(element);
        });
    },
    getQuestions: function(){
        $.ajax({
            method: "POST",
            url: pluginSettings.endpoint+'/getQuestions',
            dataType: "json",
            data: {
                'userId'   : pluginJS.userData.userId,
                'appId'    : pluginSettings.appId,
                'pluginId' : pluginSettings.pluginId
            }
        })
        .done(function(returnData){
            if(returnData.result == true){
                let qtyAnswers = 0;
                returnData.questionList.forEach(function(element){
                    // Init
                    let $placeHolder = $('template[data-question-id-'+element.questionId+']');

                    // Check custom classes
                    if( $placeHolder.attr('class') != ""){
                        $element = $(element.html);
                        $element.find('textarea, input, label').addClass( $placeHolder.attr('class') );
                    }

                    // Apply field
                    $placeHolder.replaceWith($element);

                    // Increase
                    if(element.questionAnswer != undefined) qtyAnswers++;
                });

                // Enable edit button and block fields
                if(qtyAnswers != 0){
                    $("#frmQuestions input, #frmQuestions select, #frmQuestions textarea").prop('disabled', true);
                    $("#btnSend").addClass('hide');
                    $("#btnEdit, #btnDownload").removeClass('hide');
                }

                // Init form plugins
                pluginComponentFormJS.initFormPlugins();
            }
        })
        .fail(function(jqXHR, textStatus){
            pluginComponentToastJS.show("error", "Ops...deu algo errado. Tente novamente mais tarde.");
        });
    },
    editForm: function(event){
        // Cancel default event
        event.preventDefault();

        // Unblock fields
        $("#frmQuestions input, #frmQuestions select, #frmQuestions textarea").prop('disabled', false);

        // Enable save button
        $("#btnSend").removeClass('hide');
        $("#btnEdit, #btnDownload").addClass('hide');

        // Reactivate fields
        pluginComponentFormJS.initFormPlugins();
    },
    sendForm: function(event){
        // Cancel default event
        event.preventDefault();

        // title, content, btnConfirmText, btnCancelText, callBackConfirm, callBackCancel
        pluginComponentDialogJS.confirm('', "Confirma a gravação dos dados?", "Sim", "Não", function(){
            // Get form data
            let postData = $("#frmQuestions").serializeArray();
                postData.push({'name': 'appId', 'value': pluginSettings.appId});
                postData.push({'name': 'pluginId', 'value': pluginSettings.pluginId});
                postData.push({'name': 'userId', 'value': pluginJS.userData.userId});

            $.ajax({
                method: "POST",
                url: pluginSettings.endpoint+'/saveUserAnswers',
                dataType: "json",
                data: postData
            })
            .done(function(returnData){
                if(returnData.result == true){
                    document.location.reload();
                }
            })
            .fail(function(jqXHR, textStatus){
                pluginComponentToastJS.show("error", "Ops...deu algo errado. Tente novamente mais tarde.");
            });
        });
    }
}

let pluginComponentNavigationJS = {
    instante: null,
    init: function(){
        // Init sidebar
        let element = document.getElementById('side-navigation');
        pluginComponentNavigationJS.instante = M.Sidenav.init(element, {});

        // Get Navigation
        pluginComponentNavigationJS.getNavigation();
    },
    getNavigation: function(){
        // Request navigation
        $.ajax({
            method: "POST",
            url: pluginSettings.endpoint+'/getNavigation',
            dataType: "json",
            data: {
                'appId'    : pluginSettings.appId,
                'pluginId' : pluginSettings.pluginId,
                'userId'   : pluginJS.userData.userId
            }
        })
        .done(function(returnData){
            if(returnData.result == true){
                // Apply HTML
                $("#side-navigation").html(returnData.container);

                // Open current accordions
                $("#side-navigation .current").closest('[data-sec-nav]').addClass('active');
                $("#side-navigation .current").closest('[data-main-nav]').addClass('active');

                // Init accordion plugin
                pluginComponentNavigationJS.initAccordions();
            }else{
                pluginComponentToastJS.show("error", "Ops...deu algo errado. Tente novamente mais tarde.");
            }
        })
        .fail(function(jqXHR, textStatus){
            pluginComponentToastJS.show("error", "Ops...deu algo errado. Tente novamente mais tarde.");
        });
    },
    initAccordions: function(){
        var elems = document.querySelectorAll('#side-navigation .collapsible:not(.expandable)');
        var instances = M.Collapsible.init(elems, {});

        var elems = document.querySelectorAll('#side-navigation .collapsible.expandable');
        var instances = M.Collapsible.init(elems, {
            accordion: false
        });
    },
    open: function(){
        $("#side-navigation").sidenav('open');
    },
    close: function(){
        $("#side-navigation").sidenav('close');
    }
}

let pluginCommentComponentJS = {
    qtyComments: 0,
    init: function(){
        pluginCommentComponentJS.loadFloatButtons();
    },
    toggle: function(){
        // Check
        if(pluginJS.userData == undefined) location.reload(true);

        // Show comment bar
        $commentBar = $('#comment-bar');
        if($commentBar.hasClass('open')){
            pluginCommentComponentJS.close();
        }else{
            // Disabled document overflow
            $('body').css('overflow', 'hidden');

            // Open panel
            $commentBar.addClass('open');

            // Refresh comments
            pluginCommentComponentJS.refreshComments();
        }
    },
    loadFloatButtons: function(){
        var elems = document.querySelectorAll('#comment-bar .fixed-action-btn');
        var instances = M.FloatingActionButton.init(elems, {
            direction: 'left',
            hoverEnabled: false
        });
    },
    close: function(){
        // Show comment bar
        $commentBar.removeClass('open');

        // Enable document overflow
        $('body').css('overflow', 'auto');
    },
    refreshComments: function(){
        // Request comment list
        $.ajax({
            method: "POST",
            url: pluginSettings.endpoint+'/getCommentList',
            dataType: "json",
            data: {
                'userId'   : pluginJS.userData.userId,
                'appId'    : pluginSettings.appId,
                'pluginId' : pluginSettings.pluginId
            }
        })
        .done(function(returnData){
            if(returnData.result == true){
                pluginCommentComponentJS.qtyComments = returnData.commentList.length;
                $("#form-comment-container").addClass('hide');
                if(returnData.commentList.length == 0){
                    $("#list-comment-container").addClass('hide');
                    $("#first-comment-container").removeClass('hide');
                }else{
                    $("#comment-list .comment-list-container").html(returnData.html);
                    $("#list-comment-container").removeClass('hide');
                }
            }
        })
        .fail(function(jqXHR, textStatus){
            pluginComponentToastJS.show("error", "Ops...deu algo errado. Tente novamente mais tarde.");
        });
    },
    newComment: function(){
        $("#form-comment-container .user-avatar .avatar").css('background-image', 'url('+ pluginJS.userData.urlPhoto +')');
        $("#form-comment-container .user-avatar .author").text(pluginJS.userData.name);
        $("#first-comment-container, #list-comment-container").addClass('hide');
        $("#form-comment-container").removeClass('hide');
    },
    closeNewComment: function(){
        // Refresh comments
        pluginCommentComponentJS.refreshComments();

        // Hide new comment form
        $("#form-comment-container").addClass('hide');

        // Show comment list or first comment
        if(pluginCommentComponentJS.qtyComments == 0){
            $("#list-comment-container").addClass('hide');
            $("#first-comment-container").removeClass('hide');
        }else{
            $("#list-comment-container").removeClass('hide');
            $("#first-comment-container").addClass('hide');
        }
    },
    checkComments: function(element){
        if($(element).val() ==  ''){
            $("#btnCommentSend").prop('disabled', true);
        }else{
            $("#btnCommentSend").prop('disabled', false);
        }
    },
    postComment: function(){
        let commentText = $("#user-comment").val();
        if(commentText != ""){
            $.ajax({
                method: "POST",
                url: pluginSettings.endpoint+'/postComment',
                dataType: "json",
                data: {
                    'userId'     : pluginJS.userData.userId,
                    'appId'      : pluginSettings.appId,
                    'pluginId'   : pluginSettings.pluginId,
                    'commentText': commentText
                },
                beforeSend: function(){}
            })
            .done(function(returnData){
                if(returnData.result == true){
                    // Clear text
                    $("#user-comment").val('');

                    // Refresh comments
                    pluginCommentComponentJS.refreshComments();
                }
            })
            .fail(function(jqXHR, textStatus){
                pluginComponentToastJS.show("error", "Ops...deu algo errado. Tente novamente mais tarde.");
            });
        }
    }
}

let pluginComponentHelperJS = {
    instante: null,
    init: function(){
        let element = document.getElementById('help-bar');
        pluginComponentHelperJS.instante = M.Modal.init(element, {
            opacity: 0
        });

        // get help text
        $.ajax({
            method: "POST",
            url: pluginSettings.endpoint+'/getHelpText',
            dataType: "json",
            data: {'appId':pluginSettings.appId}
        })
        .done(function(returnData){
            if(returnData.result == true){
                $("#help-content").html(returnData.helpText);
            }else{
                $("#help-content").html("Ops...deu algo errado. Tente novamente mais tarde.");
            }
        })
        .fail(function(jqXHR, textStatus){
            pluginComponentToastJS.show("error", "Ops...deu algo errado. Tente novamente mais tarde.");
        });
    },
    open: function(){
        $('#help-bar').modal('open');
    },
    close: function(){
        $('#help-bar').modal('close');
    }
}

// Init
pluginJS.init();