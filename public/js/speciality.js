let clicgraph = document.querySelector('#clicgraph')

if (clicgraph.addEventListener('click'),() => {
 document.querySelector('.specialities').style.backgroundImage = "url('../images/degrade-gaussien-copie.jpg')"
});

let clicwebdes = document.querySelector('#clicwebdes')

clicwebdes.addEventListener('click', () => {
    document.querySelector('.specialities').style.backgroundImage = "url('../images/degrade-gaussien-webdesign.jpg')"
});

/*Essai de code pour ouvrir le menu-radial
au clic
sous condition de tailles d'écrans (mobiles / tablettes)
en lieu et place du hover 
*/

function myFunction(x) {
    if (x.matches) { // If media query matches
        //document.body.style.backgroundColor = "yellow";
        document.getElementById("clic").addEventListener("click", transform,scale(".wrap,.wrap a"));

    } 
}

var x = window.matchMedia("(max-width: 991px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes 