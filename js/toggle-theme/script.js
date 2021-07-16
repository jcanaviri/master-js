const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  // change the theme of the page
  document.body.classList.toggle('dark');
})
