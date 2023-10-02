document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Obtiene los valores del usuario y la contraseña que esta registrado
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifica si el usuario y contraseña son válidos
    if (username === "admin" && password === "1234") {
        Swal.fire(
            '¡Muy Bien!',
            'Inicio de sesión exitoso',
            'success'
          )
    } else {
        Swal.fire(
            '¡Error!',
            'Usuario o contraseña son incorrectos',
            'error'
          )
    }
});