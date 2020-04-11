$(document).ready(function () {
    $(":button").mouseenter(function () {
        $("p:visible").hide(700);
    });
    $(":button").click(function () {
        $("p").toggle(700);
    });
    $(":button").mouseleave(function () {
        $("p:hidden").show(700);
        //alert("Hello World!");
    });
    //$("p#1").hover(function () {
    // alert("Hello P1!");

    $("p").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("color", "blue");
        },
        click: function () {
            $(this).css("color", "red");
        }
    })


});
$(document).ready(function () {
    /* $("button").mouseenter(function () {
         $("#div1").fadeIn();
         $("#div2").fadeIn("slow");
         $("#div3").fadeIn(3000);
     });
     $("button").mouseleave(function () {
         $("#div1").fadeOut();
         $("#div2").fadeOut("slow");
         $("#div3").fadeOut(3000);
     });
 */
    $("button").click(function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
    $("button").click(function () {
        console.log("P1 text is: " + $("#1").text());
        alert("P1 text is: " + $("#1").text());
        $("#2").html("<h1>Hello number 2</h1>");
    });
    $("#1").click(function () {
        console.log("P1 color is: " + $("#1").attr("Color"));
    })

});

function appendText() {
    var txt1 = "<p>Text.</p>";        // Create text with HTML
    var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text.";         // Create text with DOM
    let text3 = "<div><h1>Hello H1 new!</h1></div>";
    $("body").append(txt1, txt2, txt3, text3);   // Append new elements
    $("body").prepend(txt1, txt2, txt3, text3);
    $("div").before(text3);
    $("div").after(text3);

    $("button").click(function () {
        $("h1, h2, p").addClass("blue");
        $("div").addClass("important");  //could also .removeClass or .toggleClass
    });

    $("p").css({ "background-color": "yellow", "font-size": "200%" });
    $("button").click(function () {
        $("#div2").width(500).height(500);  // .width(), .innerWidth(), .outerWidth(), .outerWidth(true)
        $("div").children("p.first").css({ "color": "red", "border": "2px solid red" }); //children of p.first class
        //$("div").find("span").css();
    });
}