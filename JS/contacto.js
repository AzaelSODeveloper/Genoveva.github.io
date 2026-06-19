/* ===========================================================
   CONFIGURACIÓN DE CONTACTO Y DATOS DEL ARTISTA
   -----------------------------------------------------------
   *** EDITA SOLO ESTOS VALORES CUANDO TENGAS LOS DATOS REALES
   DEL CLIENTE/ARTISTA. NO ES NECESARIO TOCAR NADA MÁS. ***
   =========================================================== */
const DATOS_CONTACTO = {
  nombreArtista: "Azael Sánchez Ortiz", // Datos de PRUEBA
  telefono: "3314309966",               // Datos de PRUEBA
  correo: "azaelsanchez8@gmail.com"     // Datos de PRUEBA
};

// Pinta automáticamente los datos de contacto en el HTML
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".js-nombre-artista").forEach(function (el) {
    el.textContent = DATOS_CONTACTO.nombreArtista;
  });

  document.querySelectorAll(".js-telefono").forEach(function (el) {
    el.textContent = DATOS_CONTACTO.telefono;
    if (el.tagName === "A") el.href = "tel:" + DATOS_CONTACTO.telefono;
  });

  document.querySelectorAll(".js-correo").forEach(function (el) {
    el.textContent = DATOS_CONTACTO.correo;
    if (el.tagName === "A") el.href = "mailto:" + DATOS_CONTACTO.correo;
  });

  // Formulario de contacto: abre el cliente de correo del visitante
  // con el mensaje ya redactado (no requiere servidor).
  const formulario = document.getElementById("formulario-contacto");
  const estado = document.getElementById("estado-contacto");

  if (formulario) {
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();

      const nombre = document.getElementById("campo-nombre").value.trim();
      const correoVisitante = document.getElementById("campo-correo").value.trim();
      const mensaje = document.getElementById("campo-mensaje").value.trim();

      if (!nombre || !correoVisitante || !mensaje) {
        estado.textContent = "Por favor completa todos los campos.";
        estado.style.color = "#ffb3b3";
        return;
      }

      const asunto = encodeURIComponent("Contacto desde la página web - " + nombre);
      const cuerpo = encodeURIComponent(
        mensaje + "\n\n---\nNombre: " + nombre + "\nCorreo de contacto: " + correoVisitante
      );

      window.location.href =
        "mailto:" + DATOS_CONTACTO.correo + "?subject=" + asunto + "&body=" + cuerpo;

      estado.textContent = "Abriendo tu cliente de correo...";
      estado.style.color = "#b3ffb3";
      formulario.reset();
    });
  }
});
