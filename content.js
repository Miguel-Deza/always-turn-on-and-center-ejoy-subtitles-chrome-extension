// Este script se ejecutará en las páginas de YouTube

// Función para hacer clic en el botón de subtítulos y activarlos
function clickSubtitleButton() {
    const subtitleButton = document.querySelector('.ytp-subtitles-button');
    if (subtitleButton) {
      // Establece aria-pressed en true para activar los subtítulos
      subtitleButton.setAttribute('aria-pressed', 'true');
      // Simula un clic para activar los subtítulos
      subtitleButton.click();
    }
  }
  
  // Función para observar cambios en la URL
  function observeURLChanges(callback) {
    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.target.nodeName === 'HEAD') {
          callback();
        }
      }
    });
  
    observer.observe(document.querySelector('head'), { childList: true });
  }
  
  // Ejecuta la función para hacer clic en el botón de subtítulos y activarlos cuando la URL cambia
  observeURLChanges(clickSubtitleButton);
  
  // Ejecuta la función una vez al cargar la página para asegurarse de que los subtítulos estén activados desde el principio
  clickSubtitleButton();

  window.onload = function() {
    // Obtener el elemento con el id "ejoy"
    setTimeout(function() {
        // Obtener el elemento con el id "ejoy"
        var ejoyElement = document.getElementById("ejoy");

        // Verificar si se encontró el elemento
        if (ejoyElement) {
            // Establecer la posición en 300px desde abajo
            ejoyElement.style.bottom = "400px";
        } else {
            console.log("No se encontró el elemento con id 'ejoy'.");
        }
    }, 3000);
}