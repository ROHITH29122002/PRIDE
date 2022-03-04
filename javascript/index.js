let mycourses = document.querySelector('.mycourses');
let courses = document.querySelector('.courses');
let myaboutus = document.querySelector('.myaboutus');
let aboutus = document.querySelector('.about_us');
let navbar = document.querySelector('.navbar');
mycourses.addEventListener("mouseenter",function (){
    courses.style.display='grid';
})
navbar.addEventListener("mouseleave",function (){
    courses.style.display='none';
})
myaboutus.addEventListener("mouseenter",function (){
    aboutus.style.display='grid';
})
navbar.addEventListener("mouseleave",function (){
    aboutus.style.display='none';
})