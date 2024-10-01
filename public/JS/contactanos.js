function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validar que los campos no estén vacíos
    if (nombres === '' || apellidos === '' || email === '' || telefono === '' || mensaje === '') {
        alert("Por favor, completa todos los campos");
        return false;
    }

    // Validar el formato del número de teléfono
    var telefonoRegex = /^\d{9}$/;
    if (!telefono.match(telefonoRegex)) {
        alert("Por favor, ingresa un número de teléfono válido (9 dígitos)");
        return false;
    }

    // Si todos los campos son válidos, enviar el formulario
    alert("Formulario enviado correctamente");
    return true;
}