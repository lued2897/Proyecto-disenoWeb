const loginBoton = document.getElementById('login-button');
const errorEl = document.getElementById('error-admin');

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

                errorEl.style.display = 'none';
            } else {
                errorEl.style.display = 'block';
            }
        });
});
