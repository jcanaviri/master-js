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
  let data = $('#data');

  name.focus(function () {
    $(this).css('border', '1px solid green');
  });
  name.blur(function () {
    $(this).css('border', '1px solid #ccc');
    data.text($(this).val()).show();
  });

  // Mousedown y mouseup
  data.mousedown(function () {
    $(this).css('border-color', '#ccc');
  });
  data.mouseup(function () {
    $(this).css('border-color', 'black');
  });

  // Mousemove
  $(document).mousemove(function (event) {
    $('body').css('cursor', 'none')
    $('#follow-me').css({
      left: event.clientX,
      top: event.clientY,
    });
  });
});
