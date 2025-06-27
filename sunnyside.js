let hamburger = document.getElementById("hamburger");
let navlink = document.getElementById("navlink");

hamburger.addEventListener('click', ()=>{
    navlink.classList.toggle('show');
});