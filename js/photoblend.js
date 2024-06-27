const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('nav');
const mainContent = document.getElementById('main-content');
const galleryPage = document.getElementById('gallery-page');
const galleryLink = document.getElementById('gallery');
const filterLink = document.getElementById('filter');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

galleryLink.addEventListener('click', (e) => {
    e.preventDefault();
    mainContent.classList.add('hidden');
    galleryPage.classList.remove('hidden');
});

filterLink.addEventListener('click', (e) => {
    e.preventDefault();
    mainContent.classList.remove('hidden');
    galleryPage.classList.add('hidden');
});
