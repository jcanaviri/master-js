$(document).ready(function () {
  console.log('Jquery works');
  // Esto nos permite mover un elemento en la página
  $('.elemento').draggable();

  // Modificar el tamaño de los elementos
  $('.elemento').resizable();

  // $('.lista').selectable();
  $('.lista').sortable({
    update: function (event, ui) {
      console.log('Has cambiando la lista');
    },
  });

  // Drop
  $('#elemento-movido').draggable();
  $('#area').droppable({
    drop: function (event) {
      console.log('Has soltado algo dentro del area');
    },
  });

  // Efectos
  $('#mostrar').click(function () {
    $('.caja-efectos').toggle('shake', "slow");
  });
});
