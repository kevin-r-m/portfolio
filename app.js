window.addEventListener("scroll", handleNav);
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

    handleActiveNav();

    if (window.scrollY > 10){
        document.querySelector(".nav-list").classList.add('active');
        return
    }
    document.querySelector(".nav-list").classList.remove('active');
}

function handleActiveNav(){
    const observedSections = document.querySelectorAll("section");

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: .5
      }

      let callback = (entries, observer) => {
          entries.forEach(entry => {
              if(entry.isIntersecting){
                document.getElementById(entry.target.dataset.navItem).classList.add('active');
                console.log(entry.target)
              }else {
                document.getElementById(entry.target.dataset.navItem).classList.remove('active')
              }
          })
      }
      
    let observer = new IntersectionObserver(callback, options);
    

    
    observedSections.forEach(item => {
        let target = item;
        observer.observe(target);
    })
    
}

const modeToggle = document.querySelector(".mode-toggle");

modeToggle.addEventListener('click', handleModeToggle);

function handleModeToggle(e){
    // e.preventDefault();
    e.stopPropagation();
    body.classList.toggle('night-mode')
}