//obtener formulario
const form = document.getElementById("contactForm");

// Obtener mensaje de repospuesta
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", function(e){
    //evita que la pagina se recargue
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const elmail = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    let valido = true;
    [nombre, elmail, mensaje].forEach(campo => {
        campo.classList.remove("is-invalid", "is-valid");
    });

    //validacion simple
    if(nombre.value.trim() === ""){
        nombre.classList.add("is-invalid");
        valido = false;
    } else {
        nombre.classList.add("is-valid");
    }

    // VALIDACIÓN EMAIL
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regexEmail.test(email.value)){
        email.classList.add("is-invalid");
        valido = false;
    } else {
        email.classList.add("is-valid");
    }

    // VALIDACIÓN MENSAJE
    if(mensaje.value.trim() === ""){
        mensaje.classList.add("is-invalid");
        valido = false;
    } else {
        mensaje.classList.add("is-valid");
    }

    // MENSAJE GENERAL
    if(!valido){
        respuesta.innerHTML = `
          <div class="alert alert-danger">
            Corrige los errores antes de enviar
          </div>
        `;
        return;
    }
    //Mensaje exitoso
   respuesta.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show">
        Mensaje enviado correctamente
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `;

    form.reset();

    // limpiar estilos después de enviar
    [nombre, email, mensaje].forEach(campo => {
        campo.classList.remove("is-valid");
    });
});

