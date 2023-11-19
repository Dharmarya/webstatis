//Toggle class active untuk buat sidebar Hamburger menu
const navbarNav = document.querySelector ('.navbar-nav');
document.querySelector('#Menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//untuk menghilangkan sidebar menu dengan klik dimanapun tanpa harus di icon  Hamburgermenu)
const Menu =document.querySelector('#Menu');

document.addEventListener('click',function(e){
    if(!Menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})

// Readmore
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }