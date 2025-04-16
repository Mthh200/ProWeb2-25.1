const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const pulo = (event) => {
    if (event.key == "ArrowUp") {
        mario.classList.add("jump");
    }
    setTimeout(() => {
        mario.classList.remove("jump")
    }, 1000)
}



const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace("px", '');

    if (pipePosition <= 90 && pipePosition >= 30 && marioPosition < 80) {
        pipe.style.animation = 'none';

        mario.src = './game-over.webp'
    }

}, 20);

document.addEventListener("keydown", pulo);
