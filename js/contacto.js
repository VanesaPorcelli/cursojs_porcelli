function validateForm() {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var valid = true;

    if (!/^[a-zA-Z]+$/.test(name) || name.length < 4) {
        alert("El nombre debe contener al menos 4 letras");
        valid = false;
    }

    if (!/^[a-zA-Z]+$/.test(lastname) || lastname.length < 4) {
        alert("El apellido debe contener al menos 4 letras");
        valid = false;
    }

    if (!email.includes("@") || !email.includes(".com")) {
        alert("Ingrese un email válido por ejemplo: nombre@mail.com");
        valid = false;
    }
    if (isNaN(phone)) {
        alert("Ingrese un número de teléfono válido. Unicamente números, sin guiones -");
        valid = false;
    }

    if (phone.length < 8) {
        alert("El teléfono debe tener al menos 8 digitos");
        valid = false;
    }

    if (message.length == 0) {
        alert("El mensaje no puede estar vacío");
        valid = false;
    }
    if (valid) {
        // Si todos los campos son válidos, se puede enviar el formulario
        alert("Su mensaje ha sido enviado correctamente, nos pondremos en contacto a la brevedad. Muchas Gracias!");
        form.submit();
    }
    
};