var intervCarrusel = null;
var idxImagen = -1;

window.onload = function() {
    iniciarCarrusel();
}

function cambiarImagen() {
    var carrusel = document.getElementById("carrusel");
    if (idxImagen == 3) {
        idxImagen = 0;
    } else {
        idxImagen = idxImagen + 1;
    }
    console.log('indice', idxImagen);
    setImage();
    }   
    
    function setImage() {
        var carrusel = document.getElementById("carrusel");
    switch (idxImagen) {
        case 0:
            carrusel.innerHTML = "<img class='fade-in' src='https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bocw/BOCW-Season-Three-Reloaded-TOUT.jpg' width=100% height=400/>";
            break;
        case 1:
            carrusel.innerHTML = "<img class='fade-in' src='https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bocw/BOCW-S3-Battle-Pass-TOUT.jpg' width=100% height=400/>";
            break;
        case 2:
            carrusel.innerHTML = "<img class='fade-in' src='https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/Anti-Toxicity-TOUT.jpg' width=100% height=400/>";
            break;
        case 3:
            carrusel.innerHTML = "<img class='fade-in' src='https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Anti-Cheat-Progress-Report-TOUT.jpg' width=100% height=400/>";
            break;
    }
}

function iniciarCarrusel() {
    intervCarrusel = setInterval(cambiarImagen, 5000);
}

function prev() {
    clearInterval(intervCarrusel);
    idxImagen = idxImagen - 1;
    console.log('indice', idxImagen);
    setImages();
    iniciarCarrusel();
}




