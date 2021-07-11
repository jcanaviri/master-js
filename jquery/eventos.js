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

  // Click, Double Click
  box.click(function () {
    $(this).css('background-color', 'blue').css('color', 'white');
  });
  box.dblclick(function () {
    $(this).css('background-color', 'pink').css('color', 'yellow');
  });
});
