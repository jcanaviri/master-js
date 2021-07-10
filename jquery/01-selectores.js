// Jquery o $ son lo mismo
$(document).ready(() => {
  console.log('JQuery works!');

  // Selector de ID
  $('#red').css('background', 'red').css('color', '#fff');

  $('#green').css('background', 'green').css('color', '#fff');

  $('#blue').css('background', 'blue').css('color', '#fff');

  // Selector de clase
  let myClass = $('.my-class');
  myClass.css('border', '5px dashed black');

  $('.without-border').click(function() {
    $(this).addClass('zebra');
    console.log('CLICK');
  });
});
