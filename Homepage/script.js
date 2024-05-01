document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting normally

        // Basic validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
        } else {
            // Normally, here you would send the data to a server
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            alert('Thank you for your message!');
            form.reset(); // Reset the form after successful simulated submission
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.right');
    const prevButton = document.querySelector('.carousel-button.left');

    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange slides next to one another
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    // Move slide function
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    // Click right, move slides to the right
    nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        const nextSlide = currentSlide.nextElementSibling || slides[0];

        moveToSlide(track, currentSlide, nextSlide);
    });

    // Click left, move slides to the left
    prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];

        moveToSlide(track, currentSlide, prevSlide);
    });
});

document.querySelector('.carousel-button.right').addEventListener('click', function() {
    var track = document.querySelector('.carousel-track');
    // Assuming each slide is 100% of the view, move it -100% per slide
    track.style.transform = 'translateX(-100%)'; // Adjust according to current slide view
});

document.querySelector('.carousel-button.left').addEventListener('click', function() {
    var track = document.querySelector('.carousel-track');
    track.style.transform = 'translateX(0)'; // Move back to the first slide
});
