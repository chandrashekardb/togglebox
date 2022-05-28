const ourItemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");


const toggleNavbar=()=>{
    // alert("Pls Subsrbie");
    nav_header.classList.toggle("activeone");
};


mobile_nav.addEventListener("click", ()=> toggleNavbar());


console.log(ourItemDiv);

for(let i = 0; i< ourItemDiv.length; i++){

    closeIcon[i].style.display = "none";


    ourItemDiv[i].addEventListener('click', ()=>{
        const result = ourItemDiv[i].classList.toggle("active");

        if(result){
            closeIcon[i].style.display = "block";
            openIcon[i].style.display = "none";
        }else{
            closeIcon[i].style.display = "none";
            openIcon[i].style.display = "block";
        }
    })
}