document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('form');
    var validarNombre = function (e) {
        if (formulario.user.value.length == 0) {
            Swal.fire({
                icon: "error",
                title: "Nombre",
                text: "Ingrese Nombre",
              });
           return false;
        }
        return true;
    };
  
    var validarCorreo = function () {
        if (formulario.email.value.length == 0) {
            Swal.fire({
                icon: "error",
                title: "Correo",
                text: "Ingrese Correo",
              });
            return false;
        }
        return true;
    };
  
    var validarFecha = function () {
        if (formulario.fecha.value == "") {
            Swal.fire({
                icon: "error",
                title: "Fecha",
                text: "Ingrese la Fecha",
              });
            return false;
        }
        return true;
    };
  
    var validarComentario = function () {
        if (formulario.mensaje.value.length == 0) {
            Swal.fire({
                icon: "error",
                title: "Mensaje",
                text: "Ingresa un Comentario",
              });
            return false;
        }
        return true;
    };
  
          var validar = function () {
              return validarNombre() &&
              validarCorreo() &&
              validarFecha() &&
              validarComentario();
          };
  
    formulario.addEventListener("submit", handleSubmit);
    async function handleSubmit(event) {
       event.preventDefault();
      if(validar()){
            Swal.fire({
                icon: "success",
                text: "Gracias por tu comentario",
            });
      }
       }
  });