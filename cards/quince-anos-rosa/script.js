// script específico para la tarjeta quince-anos-rosa
document.addEventListener("DOMContentLoaded", function(){
  // ejemplo: smooth scroll si adaptas secciones
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
});
