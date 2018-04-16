document.querySelector(".forum-button").addEventListener("click", myFunction);



function myFunction() {
    document.querySelector(".forum-button").innerHTML = "Creating thread";
    
    // create post edit:
    var div = document.createElement("div");
    var title = document.createElement("input");
    var post = document.createElement("button");
    var text = document.createElement("input");
    
    div.classList.add("newpost");
    title.classList.add("newtitle");
    text.classList.add("newtext");
    post.classList.add("newpostbtn");
    
    document.querySelector(".content-forum").appendChild(div);
    div.appendChild(title);
    div.appendChild(text);
    div.appendChild(post);
    
    document.querySelector(".newtitle").placeholder = "Title...";
    document.querySelector(".newtext").placeholder = "Text...";
    document.querySelector(".newpostbtn").innerHTML = "Post";

        
    var container = document.querySelector(".content-forum");
    var firstelm = document.querySelector(".post-forum");
    container.insertBefore(div,firstelm);
    
    document.querySelector(".newpostbtn").addEventListener("click", postFunktion);
    
}

function postFunktion() {
    // store data:
    document.querySelector(".newpostbtn").innerHTML = "Posting";
    var title = document.querySelector(".newtitle").value;
    var text = document.querySelector(".newtext").value;
    
    localStorage.setItem("Title", title);
    localStorage.setItem("Text", text);
    
    
    // create new post:
    var div = document.createElement("div");
    var title = document.createElement("h2");
    var text = document.createElement("p");
    
    div.classList.add("postet");
    title.classList.add("postettitle");
    text.classList.add("postettext");
    
    document.querySelector(".content-forum").appendChild(div);
    div.appendChild(title);
    div.appendChild(text);
    
    var titletext = document.createTextNode(localStorage.getItem("Title"));
    title.appendChild(titletext);
    
    var posttext = document.createTextNode(localStorage.getItem("Text"));
    text.appendChild(posttext);

        
    var container = document.querySelector(".content-forum");
    var firstelm = document.querySelector(".post-forum");
    container.insertBefore(div,firstelm);
    
    // Store Post:
    
    
    // Remove old:
    var oldDiv = document.querySelector(".newpost")
    document.querySelector(".content-forum").removeChild(oldDiv);
}



