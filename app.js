window.addEventListener("scroll", handleNav);
const body = document.querySelector("body")

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('night-mode')
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    body.classList.toggle('night-mode')
});

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
        threshold: .6
      }

      let callback = (entries, observer) => {
          entries.forEach(entry => {
              if(entry.isIntersecting && window.scrollY != 0){
                document.getElementById(entry.target.dataset.navItem).classList.add('active');
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
    e.stopPropagation();
    body.classList.toggle('night-mode')
}

function handleAccordion(e){
    e.target.classList.toggle('active');
    const target = document.getElementById(e.target.dataset.target);
    target.classList.toggle('active');

}

const accordionButtons = document.querySelectorAll('.accordion');

accordionButtons.forEach(button => {
    button.addEventListener('click', handleAccordion)
})

