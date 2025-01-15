'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});

// Add-cart
const addCart=document.querySelector("#add-cart");
const addCart1=document.querySelector("#add-cart1");

const count=document.querySelector("#add-cart .count");
const count1=document.querySelector("#add-cart1 .count");

const showCard=document.querySelector(".cartTab");
const closeCard=document.querySelector(".close");

const images=document.querySelectorAll(".showcase .default");
const ListProductHTML=document.querySelector(".listCart");
const cards=document.querySelectorAll(".main-section");
const CheckOut=document.querySelector(".checkOut");


// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}


 //Add Cart
addCart.addEventListener("click",(e)=>{
  
  if(count.innerText=="0"){
    alert("Please Add To Card New Product");
    return ;
  }
  
showCard.classList.toggle("showCart")

});

document.addEventListener("contextmenu",(e)=>{
  e.preventDefault();

})


addCart1.addEventListener("click",(e)=>{
   
  if(count1.innerText=="0"){
    alert("Please Add To Cart New Product");
    return;
  }
showCard.classList.toggle("showCart")

});


let i=0;

closeCard.addEventListener("click",(e)=>{

  showCard.classList.remove("showCart");
  
  });

  CheckOut.addEventListener("click",()=>{
     
    ListProductHTML.innerHTML="";
    i=0;
    count.innerText=i;
    count1.innerText=i;

  })

   function addDataToHTML(image,price,Name){
           console.dir(image);
  const SRC=image.src.slice(22);
    
  console.log(SRC);

  let newProduct=document.createElement('div');
  newProduct.classList.add('item');

  newProduct.innerHTML =
  `
  <div class="image">
              <img  src=${image.currentSrc}  />
              </div>
              
              <div class="name">
                  ${Name.innerText}
              </div>
              <div class="totalPrice">
                ${price.innerHTML}
              </div>
              
              <div class="quantity">
                <span class="minus"><</span>
                <span class="digit">1</span>
                <span class="pluse">></span>
              </div>
  
  
  `

   ListProductHTML.appendChild(newProduct);

 

   }




cards.forEach((card,index)=>{

  card.addEventListener("click",()=>{
    
      const img=document.querySelector(` .p${index} .showcase-banner`).firstElementChild;
      const price=document.querySelector(` .p${index} .showcase-content .price-box .price`);
      const Name=document.querySelector(` .p${index} .showcase-category`);
        count.innerText=++i;
        count1.innerText=count.innerText;

    addDataToHTML(img,price,Name);

  },{once:true})


})






// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}




