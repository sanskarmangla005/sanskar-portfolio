// ================= TYPING EFFECT =================

const typingText = document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Web Developer",
    "CSE Student"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeEffect(){

    let currentWord = words[wordIndex];

    if(isDeleting){

        typingText.textContent = currentWord.substring(0,charIndex--);

    }
    else{

        typingText.textContent = currentWord.substring(0,charIndex++);

    }


    if(!isDeleting && charIndex === currentWord.length){

        isDeleting = true;

        setTimeout(typeEffect,1000);

    }

    else if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex === words.length){

            wordIndex = 0;

        }

        setTimeout(typeEffect,500);

    }

    else{

        setTimeout(typeEffect,100);

    }

}


typeEffect();




// ================= DARK / LIGHT MODE =================


// ================= DARK / LIGHT MODE =================


const themeBtn = document.getElementById("themeBtn");


// Check saved theme

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

    themeBtn.innerHTML =
    '<i class="fa-solid fa-moon"></i>';

}



themeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("light-mode");


    if(document.body.classList.contains("light-mode")){


        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';


        localStorage.setItem("theme","light");


    }

    else{


        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';


        localStorage.setItem("theme","dark");


    }


});



// ================= MOBILE MENU =================


const menu = document.querySelector(".menu");

const navLinks = document.querySelector(".nav-links");


menu.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});




// ================= READ MORE BUTTON =================


const readMoreBtn = document.getElementById("readMoreBtn");

const moreText = document.getElementById("moreText");


readMoreBtn.addEventListener("click",()=>{


    if(moreText.style.display === "block"){

        moreText.style.display="none";

        readMoreBtn.innerText="Read More";

    }

    else{

        moreText.style.display="block";

        readMoreBtn.innerText="Read Less";

    }


});




// ================= CONTACT FORM =================


const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();


    alert("Thank you! Your message has been sent.");


    contactForm.reset();


});




// ================= SCROLL TOP BUTTON =================


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }


});


topBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});




// ================= SMOOTH NAVIGATION =================


document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",(e)=>{


        e.preventDefault();


        let target =
        document.querySelector(link.getAttribute("href"));


        target.scrollIntoView({

            behavior:"smooth"

        });


        navLinks.classList.remove("active");


    });


});