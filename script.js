// ======= show menu list =======
const menuBtn = document.querySelector('.menu-toggle');
const nav_items = document.querySelector('.nav_items');
const showMenuItem = document.querySelector('.fixed');



menuBtn.addEventListener('click', () => {
    showMenuItem.classList.add('show-container');
})

showMenuItem.addEventListener('click',  (event) => {
    event.stopPropagation()
   const getName = event.target.className;
   if(getName == 'fixed show-container') {
    showMenuItem.classList.remove('show-container');
   }else if(getName == "bx bx-x") {
    showMenuItem.classList.remove('show-container');
   }
},true)






