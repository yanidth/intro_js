let miTexto = document.getElementById("text1");

let miBoton = document.getElementById("boton1");

miBoton.addEventListener("click", function(){
    miBoton.style.backgroundColor = "purple";
    miTexto.textContent = "¡Gracias!";
})