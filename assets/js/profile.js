document.querySelector(".saveButton").addEventListener("click", myFunction);



var fName = {};


function myFunction() {
    document.querySelector(".saveButton").innerHTML = "Saved";
    
    var fName = document.querySelector(".firstName").value;
    document.querySelector(".firstName").innerHTML = fName;
    
    localStorage.setItem("firstName", fName);
}





window.onload = function onloadName(){

    document.querySelector(".firstName").value = localStorage.getItem("firstName");

}

