
const ratings = document.querySelectorAll('.serie__rating--stars');

ratings.forEach(star => {

  const val = star.getAttribute('data-value');

  star.style.setProperty('--rating', val);
});