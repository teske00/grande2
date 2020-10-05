
function slider() {
    var brendsSlider = document.querySelector(".brends-slider");
    var image = document.querySelectorAll(".brends-slider img");

    var nextBtn = document.querySelector(".btn-next");
    var prevBtn = document.querySelector(".btn-prev");

    let counter = 1;
    const size = image[0].clientWidth;


    brendsSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

    nextBtn.addEventListener('click', () => {
        if (counter >= image.length - 4) return;
        brendsSlider.style.transition = 'transform 400ms ease-in-out';
        counter++;
        brendsSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        brendsSlider.style.transition = 'transform 400ms ease-in-out';
        counter--;
        brendsSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    brendsSlider.addEventListener('transitionend', () => {
        console.log(counter);
        if (image[counter].id == 'last-clone') {
            brendsSlider.style.transition = "none";
            counter = image.length - 6;
            brendsSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (image[counter].id == 'first-clone') {
            brendsSlider.style.transition = "none";
            counter = 1;
            brendsSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });

}
slider();