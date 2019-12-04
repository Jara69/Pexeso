const karty = document.querySelectorAll('.pexeso-card');

function flip() {
    console.log('click');
    console.log(this);
}

karty.forEach(karta => karta.addEventListener('click', flip));