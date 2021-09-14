/* // background parallax effect on mouse move
// https://youtu.be/VsJaXbwMjfE
(function() {
    document.addEventListener("mousemove",parallax);
    const elem = document.querySelector(".heading");

    function parallax(e) {
        let w = window.innerWidth /2;
        let h = window.innerHeight /2;
        let mouseX = e.clientX;
        let mouseY =e.clientY;
        let colors = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }
})(); */