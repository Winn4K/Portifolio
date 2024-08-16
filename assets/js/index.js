window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 1) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});