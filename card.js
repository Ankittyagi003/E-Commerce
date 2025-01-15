const menu1=document.querySelector(".menu1");
const menuSection=document.querySelector(".menu-section");
const cross=document.querySelector(".cross");

menu1.addEventListener("click",(e)=>{

    menuSection.classList.add("shows");
    console.log("ankit")


});


cross.addEventListener("click",()=>{
    menuSection.classList.remove("shows")

});


