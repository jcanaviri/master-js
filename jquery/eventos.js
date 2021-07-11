'use strict';

$(document).ready(function () {
  // Mouse Over
  let box = $('#box');
  box.mouseover(function () {
    $(this).css('background-color', 'red');
  });
  // Mouse out
  box.mouseout(function () {
    $(this).css('background', 'green');
  });
});
