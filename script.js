const caro=document.getElementById('pic');
var images=["images/slider-1.png","images/slider-2.png","images/slide-3.png"];
var start=0;
function next(){
    start++;
    if(start>=images.length){
        start=0;
        caro.src=images[start]
    }
    else{
        caro.src=images[start]
    }
}
function prev(){
    start--;
    if(start<0){
        start=images.length-1;
        caro.src=images[start]
    }
    else{
        caro.src=images[start]
    }
        
    
}

//testimonial function//
let userTexts=document.getElementsByClassName("usertext");
let userPics=document.getElementsByClassName("userpic");
function show(){
    for(userPic of userPics){
        userPic.classList.remove("active-pic");
    }
    for(userText of userTexts){
        userText.classList.remove("active-text");
    }

    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}

//tooggle function//
let menu=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle("fa-x");
    navbar.classList.toggle("active");
}
window.onscroll = () =>{
    menu.classList.remove("fa-x");
    navbar.classList.remove("active");
}