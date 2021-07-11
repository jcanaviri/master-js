'use strict';

$(document).ready(function () {
  $('#show').hide();

  $('#show').click(function () {
    $(this).hide();
    $('#hide').show();

    $('#box').fadeTo('slow', 1);
  });
  $('#hide').click(function () {
    $(this).hide();
    $('#show').show();

    $('#box').fadeTo('slow', 0.2);
  });
});
