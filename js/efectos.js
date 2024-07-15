 // JavaScript para cambiar automáticamente las imágenes de fondo
 const backgrounds = document.querySelectorAll('.background-image');
 let index = 0;
 console.log(backgrounds)

 function changeBackground() {
     backgrounds.forEach(bg => bg.classList.remove('active'));
     backgrounds[index].classList.add('active');
     index = (index + 1) % backgrounds.length;
     setTimeout(changeBackground, 5000); // Cambia cada 5 segundos (5000 milisegundos)
 }

 changeBackground(); // Iniciar el cambio automático al cargar la página