function myText() {

    if (document.getElementById("myHello").innerHTML == "Hello World!") {
        document.getElementById("myHello").innerHTML = ""
        console.log(document.getElementById("myHello").visible = "true");

    }
    else {
        let myWord = document.getElementById("myHello").innerHTML = "Hello World!";
        console.log(myWord);
    }
};
