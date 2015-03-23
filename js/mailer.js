$(function() {
  $('#example-post').multiselect({
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
    success: function(result) {
      console.log(result);
    },
    error: function(request, status, errors) {
      alert(errors);
    }
  })
});