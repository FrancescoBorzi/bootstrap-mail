$(function() {

  $('#addresses').multiselect({
    disableIfEmpty: true,
    maxHeight: 260,
    buttonWidth: '257px',
    includeSelectAllOption: true,
    enableFiltering: true,
    enableCaseInsensitiveFiltering: true
  });

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

  $('#mailer-form').on('submit', function(e) {
    e.preventDefault();
  });

  $('#send-button').click(function() {
    var selectedAddresses = $('#addresses').val();
    console.log(selectedAddresses);
    $.ajax({
      url: 'mailer.php',
      type: 'GET',
      data: { 'action' : 'sendEmails',
              'addresses' : selectedAddresses },
      success: function(result) {
        console.log(result);
      },
      error: function(request, status, errors) {
        alert(errors);
      }
    });
  });

});
