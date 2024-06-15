const dropdown = document.querySelector('.dropdown');
const dropdownBtn = document.getElementById("drop-btn");
let isDropdown = false;

const scrollContainer = document.getElementById('scroll-container');
const forwardScrollBtn = document.getElementsByClassName('right-arrow');
const backwardScrollBtn = document.getElementsByClassName('left-arrow');


const openAcc = document.getElementsByClassName('open');
const closeAcc = document.getElementsByClassName('close');
const accordion = document.getElementsByClassName('accordion');
const questionText = document.querySelectorAll('.question-container p') 
const questionDiv = document.querySelectorAll('.question');

const toggleDropdown = () => {
    let body = document.body;
    isDropdown = !isDropdown;

    if (isDropdown){
        dropdown.style.display = "flex";
        body.style.position = "fixed";
    }else {
        dropdown.style.display = "none";
        body.style.position = "relative"
    }
}

const openAccordion = () => {
    for (let i = 0; i < openAcc.length; i++){
        openAcc[i].addEventListener("click", function(){
            this.classList.add('hidden');
            closeAcc[i].classList.remove('hidden');
            accordion[i].style.display = 'block';
            questionText[i].style.color = '#00ADEE';
            // questionDiv[i].style.height = '235px'
            questionDiv[i].style.height = '150px';
            questionText[i].style.backgroundColor = '#00adee36';
        })
    }

    for (let j = 0; j < closeAcc.length; j++){
        closeAcc[j].addEventListener("click", function(){
            this.classList.add('hidden');

            openAcc[j].classList.remove('hidden');
            accordion[j].style.display = 'none';
            questionText[j].style.color = '#474747';
            questionDiv[j].style.height = '50px';
            questionText[j].style.backgroundColor = '#fff';
        })
    }
}

// scrolling event on the testimonial section
// using for loop
for (let i = 0; i < forwardScrollBtn.length; i++){
    forwardScrollBtn[i].addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: 300, behavior: 'smooth'
        });
    });
}
// I coverted the collection into an array with "Array.from" and then loop through them with forEach method
Array.from(backwardScrollBtn).forEach(back => {
    back.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -300, behavior: 'smooth'
        });
    });
})

dropdownBtn.addEventListener("click", toggleDropdown);
openAccordion();