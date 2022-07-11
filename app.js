window.onscroll = handleNav;
const body = document.querySelector("body")

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('night-mode')
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    body.classList.toggle('night-mode')
});

const dropDown = document.querySelector(".dropdown");
const dropDownList = document.querySelector(".nested-nav-list");

dropDown.addEventListener('click', handleDropDown);

function handleDropDown(e) {
    e.preventDefault();
    dropDown.classList.toggle('active');
    dropDownList.classList.toggle('active');
}

// document.addEventListener('click', function(e){
//     if(!e.target.closest(".nav-list")){
//         handleDropDown(e);
//     }
// })


function handleNav(){
    if (window.scrollY > 10){
        document.querySelector(".nav-list").classList.add('active');
        return
    }
    document.querySelector(".nav-list").classList.remove('active');
}

const modeToggle = document.querySelector(".mode-toggle");

modeToggle.addEventListener('click', handleModeToggle);

function handleModeToggle(e){
    // e.preventDefault();
    e.stopPropagation();
    body.classList.toggle('night-mode')
}