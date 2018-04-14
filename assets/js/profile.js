document.querySelector(".hej").addEventListener("click", myFunction);




var fName = document.querySelector(".firstName").innerHTML;



function myFunction() {
    document.querySelector(".hej").innerHTML = "Saved";

if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("firstName", fName);
} else {
    document.getElementById(".firstName").innerHTML = "Write your name here...";
}
}



window.onload = function(){
    document.querySelector(".firstName").innerHTML = localStorage.getItem("firstName");
}