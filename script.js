function toggleMenu() {
  const menu = document.querySelector('.menuLinks');
  const icon = document.querySelector('.hamburgerIcon');
  menu.classList.toggle('active');
  icon.classList.toggle('active');
}