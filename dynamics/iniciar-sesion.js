const loginBoton = document.getElementById('login-button');

loginBoton.addEventListener('click', (event) => {

    const administradorInput = document.getElementById('administrador-input');
    const pwInput = document.getElementById('pw-input');

    fetch('./db/administrador.json', {cache: 'no-cache'})
        .then(data => {
            return data.json();
        })
        .then(datos => {
            console.log(datos);
            if (datos.administrador === administradorInput.value && datos.pw === pwInput.value) {
                loginModal.hide();

                const menu = new bootstrap.Modal('#menuAdmin', {})
                menu.show();
            } else {
                // TODO: Mostrar errores
                console.log('error al iniciar sesion');
            }
        });
});
