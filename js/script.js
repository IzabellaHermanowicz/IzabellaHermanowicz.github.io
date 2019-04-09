var button1=document.getElementById("email");
var button3=document.getElementById("github");
var link=document.getElementById("message");

button1.addEventListener("click", function(){
    link.innerHTML= "izabella.hermanowicz@gmail.com";
    link.classList.add("clicking");
});


button3.addEventListener("click", function(){
   link.setAttribute("href","https://github.com/IzabellaHermanowicz");
    link.innerHTML="My GitHub";
    link.classList.add("clicking");
});