$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'views/' + $(this).data('include') + '.html'
      $(this).load(file)
    })

    // document.title = "your site name"

  })
  

  jQuery(document).ready(function() {
    $("#results").html(output); 
  });

