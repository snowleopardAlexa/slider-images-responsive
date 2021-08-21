const carouselSlider = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider img');

// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter
let counter = 1;
const size = carouselImages[0].clientWidth;

// move one photo ahead
carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

// next button 
nextBtn.addEventListener('click', () => {
  carouselSlider.style.transition = "transform 0.4s ease-in-out"
  counter++;
  carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// prev button 
prevBtn.addEventListener('click', () => {
    carouselSlider.style.transition = "transform 0.4s ease-in-out"
    counter--;
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlider.addEventListener('transitioned', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlider.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlider.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});