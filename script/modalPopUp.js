// Navlinks Popup
const openNav = document.getElementById('openNav');
const modalNav = document.getElementById('modalSetting');
const closeNav = document.getElementById('btnCloseNav');

openNav.addEventListener('click', () => {
  modalNav.style.display = 'flex';
});

closeNav.addEventListener('click', () => {
  modalNav.style.display = 'none';
});

const menuList = document.querySelectorAll('#menuList li');

menuList.forEach((list) => {
  list.addEventListener('click', (event) => {
    const url = list.querySelector('a');
    const sectionId = url.getAttribute('href');

    document.querySelector(sectionId).scrollIntoView();

    const modalSection = document.getElementById('modalSetting');

    modalSection.style.display = 'none';
    event.preventDefault();
  });
});

// LOGO MANIPULATION
const whiteLogo = document.getElementById('whiteLogo');
const mediaQuery = window.matchMedia('(min-width: 768px)');

if (mediaQuery.matches) {
  whiteLogo.style.display = 'block';
} else {
  whiteLogo.style.display = 'none';
}