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
    data: { 'action' : 'addresses' },
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
  })

});
