document.querySelector(".saveButton").addEventListener("click", myFunction);


function myFunction() {
    document.querySelector(".saveButton").innerHTML = "Saved";
    
    var fName = document.querySelector(".firstName").value;
    document.querySelector(".firstName").innerHTML = fName;
    var lName = document.querySelector(".lastName").value;
    document.querySelector(".lastName").innerHTML = lName;
    var pNumber = document.querySelector(".phoneNumber").value;
    document.querySelector(".phoneNumber").innerHTML = pNumber;
    var bDay = document.querySelector(".birthday").value;
    document.querySelector(".birthday").innerHTML = bDay;
    var country = document.querySelector(".country").value;
    document.querySelector(".country").innerHTML = country;
    var city = document.querySelector(".city").value;
    document.querySelector(".city").innerHTML = city;
    var school = document.querySelector(".school").value;
    document.querySelector(".school").innerHTML = school;
    
    localStorage.setItem("firstName", fName);
    localStorage.setItem("lastName", lName);
    localStorage.setItem("phoneNumber", pNumber);
    localStorage.setItem("birthday", bDay);
    localStorage.setItem("country", country);
    localStorage.setItem("city", city);
    localStorage.setItem("school", school);
}



window.onload = function onloadName(){

    document.querySelector(".firstName").value = localStorage.getItem("firstName");
    document.querySelector(".lastName").value = localStorage.getItem("lastName");
    document.querySelector(".phoneNumber").value = localStorage.getItem("phoneNumber");
    document.querySelector(".birthday").value = localStorage.getItem("birthday");
    document.querySelector(".country").value = localStorage.getItem("country");
    document.querySelector(".city").value = localStorage.getItem("city");
    document.querySelector(".school").value = localStorage.getItem("school");
}

