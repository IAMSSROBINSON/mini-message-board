console.log('form console.log script');

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    // e.preventDefault();
    console.log('form submitted');
})