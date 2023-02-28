// define las imagenes
const images = [
    'media/bg1.jpg',
    'media/bg2.jpg',
    'media/bg3.jpg',
]

//app state
let index = 0;
const max = images.length;

//get the dom elements
const containerElement = document.querySelector('.container');
const prevSlideButtom = document.querySelector('.prevSlide');
const nextSlideButtom = document.querySelector('.nextSlide');

//listen for arrow click evets
prevSlideButtom.addEventListener("click", function () {
    index--;
    setImageIndex();
    changeBackgroundImage(images[index], containerElement);
})

nextSlideButtom.addEventListener("click", function () {
    index++;
    setImageIndex();
    changeBackgroundImage(images[index], containerElement);
})

function setImageIndex(){
    if (index < 0) index = max - 1;
    if (index === max ) index = 0;
}

function changeBackgroundImage( backgroundImage, element){
    element.style.backgroundImage = `url(${backgroundImage})`
}