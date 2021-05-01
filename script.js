document.addEventListener("DOMContentLoaded", init);

window.onload = function() {
  window.scrollTo(0, 0);
}

function init() {
  history.pushState("", document.title, window.location.pathname + window.location.search);

  const hamburgerButtons = document.querySelectorAll("#hamburgerButton, #exitButton");
  const headerLinks = document.querySelectorAll("#header a");

  const header = document.querySelector('#header');

  headerLinks.forEach(link => {
    link.addEventListener("click", () => {
      header.classList.remove("open");
      document.body.classList.remove("header-open");
    });
  });
  
  hamburgerButtons.forEach(button => {
    button.addEventListener("click", () => {
      header.classList.toggle("open");
      document.body.classList.toggle("header-open");
    });
  });
}