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



