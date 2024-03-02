document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Capturar los datos del formulario
    var nombre = document.getElementById("nombre").value;
    var direccion = document.getElementById("direccion").value;
    var email = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;

    // Mostrar el mensaje de éxito
    document.getElementById("mensaje").innerHTML = "Datos enviados con éxito.";

    // Mostrar los datos ingresados
    document.getElementById("nombre-datos").textContent = nombre;
    document.getElementById("direccion-datos").textContent = direccion;
    document.getElementById("email-datos").textContent = email;
    document.getElementById("edad-datos").textContent = edad;
    document.getElementById("telefono-datos").textContent = telefono;

    document.getElementById("datos-ingresados");
    
});
