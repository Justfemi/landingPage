let bars = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

bars.addEventListener('click', () => {
    // console.log('clicked')
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

navbar.addEventListener('click', () => {
    bars.classList.remove('fa-times');
    navbar.classList.remove('active');
});

let firstDot = document.querySelector('.dot1');
let secondDot = document.querySelector('.dot2');
let thirdDot = document.querySelector('.dot3');
let fourthDot = document.querySelector('.dot4');

let firstVideo = document.querySelector('.vid1');
let secondVideo = document.querySelector('.vid2');
let thirdVideo = document.querySelector('.vid3');
let fourthVideo = document.querySelector('.vid4');

firstDot.addEventListener('click', () => {
    firstVideo.style.display = 'block';
    secondVideo.style.display = 'none';
    thirdVideo.style.display = 'none';
    fourthVideo.style.display = 'none';
});

secondDot.addEventListener('click', () => {
    firstVideo.style.display = 'none';
    secondVideo.style.display = 'block';
    thirdVideo.style.display = 'none';
    fourthVideo.style.display = 'none';
});

thirdDot.addEventListener('click', () => {
    firstVideo.style.display = 'none';
    secondVideo.style.display = 'none';
    thirdVideo.style.display = 'block';
    fourthVideo.style.display = 'none';
});

fourthDot.addEventListener('click', () => {
    firstVideo.style.display = 'none';
    secondVideo.style.display = 'none';
    thirdVideo.style.display = 'none';
    fourthVideo.style.display = 'block';
});