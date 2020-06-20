/* eslint-disable no-undef */
let pluginJS = {
  userData: null,
  init: function () {
    pluginJS.initUser();
    //
    pluginComponentFormJS.init();
  },
  initUser: function () {
    pluginJS.userData = localStorage.getItem('user') || null;
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!pluginJS.userData) {
      pluginJS.userData = JSON.parse(pluginJS.userData);
    }
  },
}

let pluginComponentDownloadJS = {
  download: function (event) {
    // Cancel default event
    event.preventDefault();

    // Convert to canvas
    // eslint-disable-next-line no-unused-vars
    let $container = $('main');
    let containerW = 800; //$container.outerWidth();
    let containerH = 3630; //$container.outerHeight();

    pluginComponentDownloadJS.screenshot([$("main").get(0)], {
      'width': containerW,
      'height': containerH
    }).then(function (canvas) {
      // Get image data
      let imgData = canvas.toDataURL('image/png');

      // Export to PDF
      let doc = new jsPDF('p', 'mm', [containerW * 0.26, containerH * 0.26]);
      doc.addImage(imgData, 'PNG', 0, 0);

      if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
        window.open(doc.output('bloburl'));
      } else {
        doc.save('como-se-preparar.pdf');
      }
    });
  },
  screenshot: function (element, options = {}) {
    // Our cropping context
    let cropper = document.createElement('canvas').getContext('2d');

    // Save the passed width and height
    let finalWidth = options.width || window.innerWidth;
    let finalHeight = options.height || window.innerHeight;

    // Update the options value so we can pass it to h2c
    if (options.x) {
      options.width = finalWidth + options.x;
    }
    if (options.y) {
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
  init: function () {
    pluginComponentFormJS.getQuestions();
  },
  initFormPlugins: function () {
    try{
      let elems = document.querySelectorAll('main select');
      M.FormSelect.init(elems, {});
      //
      M.updateTextFields();
      //
      $('textarea').each(function (index, element) {
        M.textareaAutoResize(element);
      });
    } catch(e) {
      //
    }
  },
  getQuestions: function () {
    $.ajax({
      method: "POST",
      url: pluginJS.userData.endpoint + '/objects/questions',
      dataType: "json",
      data: {
        'companyId': pluginJS.userData.companyId,
        'productId': pluginJS.userData.productId,
        'customerId': pluginJS.userData.customerId,
        'objectId': pluginJS.userData.objectId
      }
    })
      .done(function (returnData) {
        if (returnData.status == true) {
          let qtyAnswers = 0;
          returnData.questionList.forEach(function (element) {
            // Init
            let $placeHolder = $('template[data-question-id-' + element.questionId + ']');
            let $element = null;

            // Check custom classes
            if ($placeHolder.attr('class') != "") {
              $element = $(element.html);
              $element.find('textarea, input, label').addClass($placeHolder.attr('class'));
            }
            if ($placeHolder.attr('placeHolder') != "") {
              $element = $(element.html);
              $element.find('textarea, input, label').attr('placeHolder', $placeHolder.attr('placeHolder'));
            }

            // Apply field
            $placeHolder.replaceWith($element);

            // Increase
            if (element.questionAnswer != undefined && element.questionAnswer != '') qtyAnswers++;
          });

          // Enable edit button and block fields
          if (qtyAnswers != 0) {
            $("#frmQuestions input, #frmQuestions select, #frmQuestions textarea").prop('disabled', true);
            $("#btnSend").addClass('hide');
            $("#btnEdit, #btnDownload").removeClass('hide');
          }

          // Init form plugins
          pluginComponentFormJS.initFormPlugins();
        }
      })
      .fail(function () {
        pluginComponentToastJS.show("error", "Ops...deu algo errado. Tente novamente mais tarde.");
      });
  },
  editForm: function (event) {
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
  sendForm: function (event) {
    // Cancel default event
    event.preventDefault();

    // title, content, btnConfirmText, btnCancelText, callBackConfirm, callBackCancel
    pluginComponentDialogJS.confirm('', "Confirma a gravação dos dados?", "Sim", "Não", function () {
      // Get form data
      let postData = $("#frmQuestions").serializeArray();
      postData.push({ 'name': 'companyId', 'value': pluginJS.userData.companyId });
      postData.push({ 'name': 'productId', 'value': pluginJS.userData.productId });
      postData.push({ 'name': 'objectId', 'value': pluginJS.userData.objectId });
      postData.push({ 'name': 'customerId', 'value': pluginJS.userData.customerId });

      $.ajax({
        method: "POST",
        url: pluginJS.userData.endpoint + '/objects/questions/answer',
        dataType: "json",
        data: postData
      })
        .done(function (returnData) {
          if (returnData.status == true) {
            document.location.reload()
          }
        })
        .fail(function () {
          console.log("Ops...deu algo errado. Tente novamente mais tarde.");
          // pluginComponentToastJS.show("error", "Ops...deu algo errado. Tente novamente mais tarde.");
        });
    });
  }
}

// Receive window parent data
window.addEventListener('message', function (e) {
  if (e.data.event === 'storage') {
    // Set storage
    localStorage.setItem('user', e.data.data);

    // Init app
    pluginJS.init();
  }
});

// Send ready state to parent
window.parent.postMessage({ 'event': 'loaded', 'data': true }, '*');