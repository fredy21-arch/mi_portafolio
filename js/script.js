
const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});


//form//
function comprobar()
{
var nombre = document.formu.nombre.value;
   var correo = document.formu.correo.value;
   var proyecto = document.formu.proyecto.value;
   
    if (nombre.length > 20)
   {
      alert("Tu nombre es demasiado grande");
      return false;
   }
    
//     if (correo.length > 20)
//    {
//       alert("tu correo puede ser largo");
//       return false;
//    }

      
    if (proyecto.length > 20)
   {
      alert("Tu nombre es demasiado grande");
      return false;
   }
}
   






