// Toggle class active
const navbarnav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active')
};

// klik di luar area sidebar
const hamburger = document.querySelector('#hamburger-menu');


Document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});