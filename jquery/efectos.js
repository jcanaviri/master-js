'use strict';

$(document).ready(function () {
  let box = $('#box');
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

  $('#allInOne').click(function () {
    $('#box').slideToggle('fast');
  });

  $('#my-animation').click(function () {
    box
      .animate(
        {
          marginLeft: 500,
          fontSize: '40px',
          height: '110px',
        },
        'slow'
      )
      .animate(
        {
          borderRadius: '150px',
          marginLeft: '0px',
        },
        'slow'
      )
      .animate(
        {
          borderRadius: '90px',
          marginTop: '0px',
        },
        'slow'
      );
  });
});
