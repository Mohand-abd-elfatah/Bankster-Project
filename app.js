const menu = document.querySelector("#mobile-menu");
const menulinks = document.querySelector(".navbar__menu");


menu.addEventListener("click", function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle("active");
});

// function to make logos move
const logos = document.querySelector(".rotating-logos__track").cloneNode(true);
document.querySelector(".rotating-logos").appendChild(logos);



// yearly plan

function switchpricing() {
    const checkbox = document.getElementById("pricing-toggle-checkbox");
    const monthlyprices = document.querySelectorAll(".monthly-price");
    const yearlyprices = document.querySelectorAll(".yearly-price");
    const yearlydiscount = document.querySelector(".save-percentage");


    if(checkbox.checked){
        monthlyprices.forEach((price) => price.classList.add("hidden")); 
        yearlyprices.forEach((price) => price.classList.remove("hidden"));
        yearlydiscount.style.display = "inline";
    } else{
        monthlyprices.forEach((price) => price.classList.remove("hidden")); 
        yearlyprices.forEach((price) => price.classList.add("hidden"));
        yearlydiscount.style.display = "none";
    }
    
}

window.addEventListener("load", ()=>{
    const yearelement = document.getElementById("year");
    const currentyear=new Date().getFullYear();
    yearelement.textContent=currentyear;
});