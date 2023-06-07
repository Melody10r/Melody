function saludar() {
        var nombre = prompt("Por favor, ingresa tu nombre:");
        alert("¡Hola, " + nombre + "!");
    }

    let formulario = document.getElementById ("miFormulario"); 
        formulario.addEventListener ("submit"), function(event) {
        event.preventDefault(); 
    
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("correo electronico").value;
    
        if (nombre === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        return; 
    }
}

