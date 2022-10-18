const imageContainer = document.querySelector(".work__image");
const imageSlide = document.querySelector(".work__image-slide"); 
const sliderLeft = document.querySelector(".slider__left");
const sliderRight = document.querySelector(".slider__right");

const slides = [...imageContainer.querySelectorAll(".work__image-slide")];
const transformArray = [600, 300, 0, -300, -600];


sliderLeft.addEventListener("click", (e) =>{
  
    //getting the "is-selected" class from imageContainer
    const currentSlide = imageContainer.querySelector(".is-selected");
    const previousSlide = currentSlide.previousElementSibling;

    currentSlide.classList.remove('is-selected');
    previousSlide.classList.add('is-selected');

    const currentSlideIndex = slides.findIndex(slide => slide === previousSlide);
    imageContainer.style.transform = `translateX(${transformArray[currentSlideIndex]}px)`; 


    //disable the button
    sliderRight.removeAttribute('disabled');

    if (!previousSlide.previousElementSibling) {
        sliderLeft.setAttribute("disabled", true);  
      }
 
});

sliderRight.addEventListener("click", (e) =>{
    //getting the "is-selected" class from imageContainer
    const currentSlide = imageContainer.querySelector(".is-selected");
    const nextSlide = currentSlide.nextElementSibling;

    currentSlide.classList.remove('is-selected')
    nextSlide.classList.add('is-selected')

    const currentSlideIndex = slides.findIndex(slide => slide === nextSlide);
    imageContainer.style.transform = `translateX(${transformArray[currentSlideIndex]}px)`; 

    //disable the button
    sliderLeft.removeAttribute('disabled');

    if (!nextSlide.nextElementSibling) {
        sliderRight.setAttribute("disabled",true);
      }

});



