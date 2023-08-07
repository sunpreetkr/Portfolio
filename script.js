const navList = document.getElementById('nav-list-toggle');
function myFunction() {
 if (navList.style.display === "block") {
   navList.style.display = "none";
 } else{
   navList.style.display = "block";
 }
}
const navbarLink = document.querySelectorAll(".navbar__link");
navbarLink.forEach((link)=> {
  link.addEventListener("click", ()=> {     navList.style.display = "none";
  
});
});
