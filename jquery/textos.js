'use strict';

$(document).ready(function () {
  console.log($('a').length);

  refreshLinks();

  $('#add-btn').click(function () {
    let newLink = $('#add-link').val();
    $('#menu').prepend(`<li><a href="${newLink}">${newLink}</a></li>`);
    $('#add-link').val('');
    refreshLinks();
  });

  function refreshLinks() {
    $('a').each(function (index) {
      let self = $(this);
      let link = self.attr('href');

      self.attr('target', '_blank');
      self.text(link);
    });
  }
});
