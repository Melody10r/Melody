function saludar() {
    var nombre = prompt("Por favor, ingresa tu nombre:");
    alert("¡Hola, " + nombre + "!");
    }

let formulario = document.querySelector(".formularioFormato");
    formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    if (nombre === "" || email === "") {
    alert("Por favor, completa todos los campos.");
    return;
    }

    if (confirm("¿Enviar formulario?")) {
    alert("Formulario enviado correctamente.");
    formulario.submit();
    }
});
