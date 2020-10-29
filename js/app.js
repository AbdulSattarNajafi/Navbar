
const navToggle = document.querySelector("#btn-toggle");
const links = document.querySelector(".nav-menu");

navToggle.addEventListener('click', function() {
  if(links.classList.contains('show-links')) {
    links.classList.remove('show-links');
  }else{
    links.classList.add('show-links');
  }
});
//Simple way instead of if/else links.classList.toggle('show-links');