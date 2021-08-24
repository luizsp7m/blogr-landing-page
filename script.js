function menuToggle() {
  const navbarNav = document.querySelector('.navbar-nav');
  const menuHamburger = document.querySelector('.menu-hamburger');

  navbarNav.classList.toggle('toggle');
  menuHamburger.classList.toggle('toggle');
}