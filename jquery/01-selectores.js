// Jquery o $ son lo mismo
$(document).ready(() => {
  console.log('JQuery works!');

  // Selector de ID
  $('#red').css('background', 'red').css('color', '#fff');

  $('#green').css('background', 'green').css('color', '#fff');

  $('#blue').css('background', 'blue').css('color', '#fff');

  // Selector de clase
  let myClass = $('.my-class');
  myClass.addClass('zebra');

  $('.without-border').click(function () {
    $(this).addClass('zebra');
  });

  // Selector de etiqueta
  let paragraphs = $('p').css('cursor', 'pointer');
  paragraphs.click(function () {
    let self = $(this);
    if (!self.hasClass('big')) {
      self.addClass('big');
    } else {
      self.removeClass('big');
    }
  });

  // Selectores de atributo
  $('[title="Google"]').css('background', '#555');
  $('[title="Facebook"]').css('background', '#eeeeca');
});
