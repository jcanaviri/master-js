'use strict';

$(document).ready(function () {
  function setRed() {
    $(this).css('background-color', 'red');
  }
  function setGreen() {
    $(this).css('background-color', 'green');
  }

  // Hover
  let box = $('#box');
  box.hover(setRed, setGreen);
});
