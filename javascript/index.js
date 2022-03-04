let mycourses = document.querySelector('.mycourses');
let courses = document.querySelector('.courses');
let myaboutus = document.querySelector('.myaboutus');
let aboutus = document.querySelector('.about_us');
mycourses.addEventListener("mouseenter",function (){
    courses.style.display='grid';
})
mycourses.addEventListener("mouseleave",function (){
    courses.style.display='none';
})
myaboutus.addEventListener("mouseenter",function (){
    aboutus.style.display='grid';
})
myaboutus.addEventListener("mouseleave",function (){
    aboutus.style.display='none';
})