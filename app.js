const dropDown = document.querySelectorAll(".dropdown");
const dropDownList = document.querySelectorAll(".nested-nav-list");

dropDown.forEach(item => {
    item.addEventListener('click', handleDropDown);
});

function handleDropDown(e) {
    e.preventDefault();
    const selectedItem = document.getElementById(e.target.dataset.destination);

    selectedItem.classList.toggle('active');
    selectedItem.classList.toggle('active');
}

document.addEventListener('click', function(e){
    if(!e.target.closest(".nav-list")){
        handleDropDown(e);
    }
})

window.onscroll = handleNav;

function handleNav(){
    if (window.scrollY > 10){
        document.querySelector(".nav-list").classList.add('active');
        return
    }
    document.querySelector(".nav-list").classList.remove('active');
}