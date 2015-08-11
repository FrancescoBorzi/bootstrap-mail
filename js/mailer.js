// Display success message
function alertSuccess(message) {

  var container = $('#message-container');

  container.removeClass('alert-danger');
  container.addClass('alert-success');

  $('#message-text').html(message);

  container.show();

};

// Display error message
function alertError(message) {

  var container = $('#message-container');

  container.removeClass('alert-success');
  container.addClass('alert-danger');

  $('#message-text').html(message);

  container.show();

};

// Hide message
function alertHide() {
  $('#message-container').hide();
}


$(function() {

  /* Multiselect config */

  $('#addresses').multiselect({
    disableIfEmpty: true,
    maxHeight: 260,
    buttonWidth: '257px',
    includeSelectAllOption: true,
    enableFiltering: true,
    enableCaseInsensitiveFiltering: true
  });


  /* Get email addresses */

  $.ajax({
    url: 'mailer.php',
    type: 'GET',
    data: {
      'action' : 'getAddresses'
    },
    dataType: 'json',
    success: function(result) {
      console.log(result);
      $.each(result, function (i, item) {
        $('#addresses').append($('<option>', {
          value: item.address,
          text : item.name + " (" + item.address + ")"
        }));
      });
      $('#addresses').multiselect('rebuild');
    },
    error: function(request, status, errors) {
      alertError(errors);
    }
  });


  /* Send email */

  $('#mailer-form').on('submit', function(e) {
    e.preventDefault();
  });

  $('#send-button').click(function() {

    var selectedAddresses = $('#addresses').val();
    var subject           = $('#form-subject').val();
    var text              = $('#form-text').val();

    $.ajax({
      url: 'mailer.php',
      type: 'GET',
      data: {
        'action'    : 'sendEmails',
        'subject'   : subject,
        'text'      : text,
        'addresses' : selectedAddresses
      },
      dataType: 'json',
      success: function(result) {
        console.log(result);

        if (result.status == "error") {
          alertError(result.message);
        }
        else if (result.status == "ok") {
          alertSuccess("Email has been sent.");
        }
      },
      error: function(request, status, errors) {
        alertError(errors);
      }
    });

  });

});
