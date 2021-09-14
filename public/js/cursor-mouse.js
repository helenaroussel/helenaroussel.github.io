// var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
   anchor = document.querySelector("a");
document.addEventListener("mousemove", function (e) {
    cursor2.style.cssText = "left: " + e.clientX
    + "px; top: " + e.clientY + "px;";
});

//anchor tag hover
/* anchor.forEach(anc => {
    anc.addEventListener("mouseover", () =>{
        cursor2.style.transform = "scale(2)";
        cursor2.style.animationName = "borderAnim";
    });
    anc.addEventListener("mouseleave", () => {
        cursor2.style.transform = "";
        cursor2.style.animationName = "";

    });

}); */