let p2 = document.getElementById("id2");
btn1Click = () => {
    let content = document.getElementById("demo").innerHTML = "<h1 style=\"color:red\">Hello from javascript!</h1><h3 style= \"color: blue \">Hello from javascript!</h3>";
    document.getElementById("demo").style.backgroundColor = "orange";
    p2.style.fontSize = "80px";
    console.log(content);


    p2.style.display = "none";
    let x = document.getElementsByClassName("paragraph");
    //document.getElementById("id1").innerHTML = x[1].innerHTML;
    document.getElementById("id1").innerHTML = content;
    x[2].innerHTML = Date();

    document.getElementById("id3").style.color = "red";  //style
    document.getElementById("button").style.backgroundColor = "red";
    console.log(x[1].innerHTML);
    x[1].addEventListener("mouseover", function () { alert("hello"); });

}

function textColor(el) {
    el.innerHTML = "blue";
    var myCollection = document.getElementsByTagName("p");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        myCollection[i].style.backgroundColor = "red";
    }

}

window.addEventListener("resize", function () {
    document.getElementById("demo").innerHTML = Math.random();
    let myRemove = document.getElementById("id1");
    myRemove.remove();
    p2.style.display = "";
});

