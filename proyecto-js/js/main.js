$(document).ready(function () {
  if (window.location.href.indexOf('index') > -1) {
    // Slider
    $('.bxslider').bxSlider({
      auto: true,
      speed: 400,
      pause: 1000,
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
    });
  }

  if (window.location.href.indexOf('index') > -1) {
    // Posts
    const posts = [
      {
        title: 'Prueba 1',
        date:
          'Published ' +
          moment().date() +
          ' of ' +
          moment().format('MMMM') +
          ' of ' +
          moment().format('YYYY'),
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa modi asperiores, inventore dolorum eum molestiae fuga non earum ipsam, temporibus enim pariatur, ad ab veniam voluptate magni maiores quod!',
      },
      {
        title: 'Prueba 2',
        date:
          'Published ' +
          moment().date() +
          ' of ' +
          moment().format('MMMM') +
          ' of ' +
          moment().format('YYYY'),
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa modi asperiores, inventore dolorum eum molestiae fuga non earum ipsam, temporibus enim pariatur, ad ab veniam voluptate magni maiores quod!',
      },
      {
        title: 'Prueba 3',
        date:
          'Published ' +
          moment().date() +
          ' of ' +
          moment().format('MMMM') +
          ' of ' +
          moment().format('YYYY'),
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa modi asperiores, inventore dolorum eum molestiae fuga non earum ipsam, temporibus enim pariatur, ad ab veniam voluptate magni maiores quod!',
      },
      {
        title: 'Prueba 4',
        date:
          'Published ' +
          moment().date() +
          ' of ' +
          moment().format('MMMM') +
          ' of ' +
          moment().format('YYYY'),
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa modi asperiores, inventore dolorum eum molestiae fuga non earum ipsam, temporibus enim pariatur, ad ab veniam voluptate magni maiores quod!',
      },
    ];

    posts.forEach((post) => {
      let template = `
      <article class="post">
      <h2>${post.title}</h2>
      <span class="date">${post.date}</span>
      <p>${post.body}</p>
      <a href="#" class="btn-more">Leer Mas</a>
    </article>
    `;
      $('#posts').append(template);
    });
  }
  // Select theme
  let theme = $('#theme');
  $('#green-theme').click(function () {
    theme.attr('href', 'css/green.css');
    $('#first').attr('src', './img/hojas.jpg');
  });
  $('#red-theme').click(function () {
    theme.attr('href', 'css/red.css');
    $('#first').attr('src', './img/rojo.jpg');
  });
  $('#blue-theme').click(function () {
    theme.attr('href', 'css/blue.css');
    $('#first').attr('src', './img/cielo.jpg');
  });

  // Scroll arriba de la web
  $('.subir').click(function (event) {
    event.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // Formulario de logueo
  $('#form-login').submit(function () {
    let username = $('#user').val();
    localStorage.setItem('username', username);
  });

  let username = localStorage.getItem('username');
  if (username) {
    let about = $('#about p');
    about.html(`Welcome ${username}`);
    about.append('<a href="#" id="logout">Cerrar Cession</a>');
    $('#login').hide();

    $('#logout').click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  // Accordeon
  if (window.location.href.indexOf('about') > -1) {
    $('#accordion').accordion();
  }

  // Reloj
  if (window.location.href.indexOf('reloj') > -1) {
    setInterval(() => {
      let clock = moment().format('h:mm:ss');
      $('#reloj').html(clock);
    }, 1000);
  }

  // Validacion
  if (window.location.href.indexOf('contact') > -1) {
    $('form input[name="date-field"]').datepicker({
      format: 'dd/mm/yyyy',
    });

    $.validate({
      lang: 'es',
    });
  }
});
