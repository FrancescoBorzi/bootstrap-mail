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
    data: { 'action' : 'getAddresses' },
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
      alert(errors);
    }
  });


  /* Send email */

  $('#mailer-form').on('submit', function(e) {
    e.preventDefault();
  });

  $('#send-button').click(function() {

    var selectedAddresses = $('#addresses').val();
    var subject = $('#form-subject').val();
    var text = $('#form-text').val();

    $.ajax({
      url: 'mailer.php',
      type: 'GET',
      data: {
        'action'    : 'sendEmails',
        'subject'   : subject,
        'text'      : text,
        'addresses' : selectedAddresses
      },
      success: function(result) {
        console.log(result);
      },
      error: function(request, status, errors) {
        alert(errors);
      }
    });

  });

});
