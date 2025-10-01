 let stars = document.getElementById("stars");
 let moon = document.getElementById("moon");
 let river = document.getElementById("river");
  let mountains4 = document.getElementById("mountains4");
 let mountains3 = document.getElementById("mountains3");
  let boat6 = document.getElementById("boat");
 let nouvel = document.querySelector(".new");

window.onscroll = function(){
 let value = scrollY;
    stars.style.left = value + 'px'; 
    moon.style.top = value *5 + 'px'; 
mountains3.style.top = value *3+ 'px';
    mountains4.style.top = value *1.5 + 'px';
    river.style.top = value  + 'px';
   boat6.style.top = value + 'px';
      boat6.style.left = value *3 + 'px';
      nouvel.style.fontSize = value + 'px';

  if (scrollY >= 67) {
    nouvel.style.fontSize = "67px";
    nouvel.style.position = "fixed";
if (scrollY >= 145) {
  nouvel.innerText = "HAPPY NEW DAY"; 
document.querySelector(".main").style.background= "linear-gradient(rgba(250, 238, 221, 1),rgba(248, 128, 91, 1))";
   
} else {
  nouvel.innerText = "happy new night"; 
  document.querySelector(".main").style.background= "linear-gradient(rgba(36, 9, 36, 1),rgba(255, 255, 255, 0.733))";
}
  if (scrollY >= 420) {
    nouvel.style.display = "none";

  }else {
    nouvel.style.display = "block";

  }
}
}