$(document).ready(function () {
  console.log('Jquery works!');

  // Load
  // $('#datos').load('https://jsonplaceholder.typicode.com')
  $.get('https://jsonplaceholder.typicode.com/users', {}, function (response) {
    response.forEach((element, index) => {
      $('#datos').append(`<p>${index}.- ${element.name}</p>`);
    });
  });

  const post = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  $.post('https://jsonplaceholder.typicode.com/posts', post, (response) => {
    console.log(response);
  });

  $('#form').submit(function (event) {
    event.preventDefault();
    const post = {
      title: $('input[name="title"]').val(),
      body: $('input[name="body"]').val(),
      userId: 1,
    };

    console.log(post);

    $.post($(this).attr('action'), post, function (response) {
      console.log(response);
    });
    return false;
  });

  $.ajax({
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: JSON.stringify(post),
    beforeSend: function () {
      console.log('Eviando datos...');
    },
    success: function (response) {
      console.log(response);
    },
    error: function () {
      console.log('A ocurrido algun error');
    },
    timeout: 2000,
  });
});
