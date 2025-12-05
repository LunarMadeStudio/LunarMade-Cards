// script.js - scripts globales para LunarMade-Cards
console.log("LunarMade Cards - scripts cargados");

document.addEventListener("DOMContentLoaded", function(){
  // efecto hover en el grid de tarjetas
  document.querySelectorAll('.card').forEach(c => {
    c.addEventListener('mouseenter', () => c.classList.add('hover'));
    c.addEventListener('mouseleave', () => c.classList.remove('hover'));
  });

  // ejemplo: abrir la tarjeta en una nueva pestaña si se hace ctrl+click
  document.querySelectorAll('.card a, .card').forEach(el => {
    el.addEventListener('click', function(e){
      /* si usas enlaces normales, este bloque no es necesario */
    });
  });
});
