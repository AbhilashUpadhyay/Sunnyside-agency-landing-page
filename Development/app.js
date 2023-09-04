 "use strict"
let goUp= document.getElementById("goUp").addEventListener("click",function(){
    
    window.scrollTo(0,0);
    
})

let home= document.getElementById("home").addEventListener("click",function(){
    window.scrollTo(0,0);
})
let about= document.getElementById("about").addEventListener("click",function(){
    window.scrollTo(0,700);
})
let services = document.getElementById("services").addEventListener("click",function(){
    window.scrollTo(0,1900);
})
let contact= document.getElementById("contact").addEventListener("click",function(){
    window.scrollTo(0,2500);
})
let ul = document.getElementById('ul');
let menu = document.getElementById('menu');

menu.addEventListener('click',()=>{
   
    ul.classList.toggle('show');
    
    menu.classList.toggle('close');
    console.log('hello')

})
