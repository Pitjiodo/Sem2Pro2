document.querySelector(".forum-button").addEventListener("click", myFunction);


function myFunction() {
    document.querySelector(".forum-button");
    
        
    var div = document.createElement("div");
    var title = document.createElement("input");
    var post = document.createElement("button");
    var text = document.createElement("input");
    var
    
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
    firstelm.insertBefore(div,)
}