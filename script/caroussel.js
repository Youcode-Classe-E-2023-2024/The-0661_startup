const carousels = document.querySelectorAll('.slides');
const prevButtons = document.querySelectorAll('.prev');
const nextButtons = document.querySelectorAll('.next');
let j = 0;
const imageWidth = carousels[0].offsetWidth / 3;

nextButtons.forEach((element, index) => {
    element.addEventListener("click", function () {
        moveright(index);
    });
});

prevButtons.forEach((element, index) => {
    element.addEventListener("click", function () {
        moveleft(index);
    });
});

function moveright(index) {
    if (j === carousels[index].children.length - 4) {
        j = 0;
    } else {
        j = j + 1;
    }
    updatecarousel(index);
}

function moveleft(index) {
    if (j === 0) {
        j = carousels[index].children.length - 4;
    } else {
        j = j - 1;
    }
    updatecarousel(index);
}

function updatecarousel(index) {
    const transformValue = -j * imageWidth;
    carousels[index].style.transform = 'translateX(' + transformValue + 'px)';
}
