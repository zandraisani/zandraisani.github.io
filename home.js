const navLinks = document.querySelectorAll('nav .nav-container .links a');

const activePage = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');
        }
    });
});

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

//fot Typewriter effect

const texts = [
    "XI TJKT 1",
    "XI",
    "TJKT 1"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;

const pendidikanBtns = document.querySelectorAll('.pendidikan-btn');

pendidikanBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const pendidikanDetails = document.querySelectorAll('.pendidikan-detail');

        pendidikanBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        pendidikanDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        pendidikanDetails[idx].classList.add('active');
    });
});


const arrowRight = document.querySelector('.portofolio-box .navigasi .arrow-right');
const arrowLeft = document.querySelector('.portofolio-box .navigasi .arrow-left');

let index = 0;

const activePortofolio = () => {
    const videoSlide = document.querySelector('.portofolio-carousel .video-slide');
    const portofolioDetails = document.querySelectorAll('.portofolio-detail');

    videoSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 4}rem))`;

    portofolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portofolioDetails[index].classList.add('active')
}

arrowRight.addEventListener('click', () => {
    if (index < 1) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 2;
        arrowRight.classList.add('disabled');
    }

    activePortofolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortofolio();
});

