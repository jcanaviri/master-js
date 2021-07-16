$(document).ready(function () {
  // Slider
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
  });

  // Posts
  const posts = [
    {
      title: 'Prueba 1',
      date: new Date(),
      body: 'lorem ipsum dolor sit amet',
    },
    {
      title: 'Prueba 2',
      date: new Date(),
      body: 'lorem ipsum dolor sit amet',
    },
    {
      title: 'Prueba 3',
      date: new Date(),
      body: 'lorem ipsum dolor sit amet',
    },
    {
      title: 'Prueba 4',
      date: new Date(),
      body: 'lorem ipsum dolor sit amet',
    },
  ];
  console.log(posts);
});
