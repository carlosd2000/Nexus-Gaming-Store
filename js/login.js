// Captura el formulario por su ID
let loginForm = document.querySelector('#loginForm');

// Añade el evento 'submit' para evitar que el formulario se envíe automáticamente
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Previene que el formulario se envíe de forma predeterminada

    // Captura los valores de los campos de correo y contraseña
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    // Obtiene la lista de usuarios almacenados en el localStorage o devuelve un array vacío si no hay usuarios
    let Users = JSON.parse(localStorage.getItem('users')) || [];

    // Busca un usuario con el mismo email y contraseña que los ingresados
    let validUser = Users.find(user => user.email === email && user.password === password);

    // Si no se encuentra un usuario válido, muestra un mensaje de error con SweetAlert
    if (!validUser) {
        Swal.fire({
            icon: 'error',
            title: 'Error de Datos',
            text: 'El usuario y/o contraseña son incorrectos'
        });
        return;  // Sale de la función si los datos no son correctos
    }

    // Si se encuentra un usuario válido, muestra un mensaje de éxito
    Swal.fire({
        icon: 'success',
        title: 'Inicio de Sesión Exitoso',
        text: `Bienvenido ${validUser.name}`
    }).then(() => {
        // Redirige al usuario a la página principal después de hacer clic en "OK"
        window.location.href = '../index.html';
    });
});
