//--Fungsi Readmore--//
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

//--Fungsi Alert Box--//
{
    var txt;
    if (confirm("Pesan Terkirim!")) {
    txt = "You pressed OK!";
    } else {
    txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}


