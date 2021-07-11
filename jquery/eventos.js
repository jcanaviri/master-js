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

  // Focus y blur
  let name = $('#name');
  name.focus(function () {
    $(this).css('border', '1px solid green');
  });
  name.blur(function () {
    $(this).css('border', '1px solid #ccc');
    $('#data').text($(this).val()).show();
  });
});
