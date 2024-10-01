function legordulobemutatkozo1(){
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Megtekint";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Elrejt";
      moreText.style.display = "inline";
    }
}
function legordulobemutatkozo2(){
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Megtekint";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Elrejt";
      moreText.style.display = "inline";
    }
}
function legordulobemutatkozo3(){
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Megtekint";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Elrejt";
      moreText.style.display = "inline";
    }
}

function startTime() {
    const date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
    setTimeout(function() {startTime()}, 1000);
  }

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

var a=0;
var images=[];


images[1]= 'tajkep1.jpg'
images[2]= 'tajkep2.jpg'
images[3]= 'tajkep3.jpg'
images[4]= 'tajkep4.jpg'

function diavetites(){
    document.slide.src = images[a];
    if (a===1){
        document.write(images[a]);
        a++;

    }
    else if(a===4){
        document.write(images[1]);
    };
}