const botonCrear = document.getElementById('crear-usuario-button');

botonCrear.addEventListener('click', () => {
    const nombreInput = document.getElementById('nombre-nuevo-usuario');
    const mailInput = document.getElementById('mail-nuevo-usuario');

    nombreInput.value = nombreInput.value.trim();
    mailInput.value = mailInput.value.trim();

    if (!nombreInput.checkValidity()) {

        const errorEl = document.getElementById('error-nombre-nuevo-usuario');
        errorEl.style.display = 'block';
    } else {
        const errorEl = document.getElementById('error-nombre-nuevo-usuario');
        errorEl.style.display = 'none';
    }
    if (!mailInput.checkValidity()) {
        const errorEl = document.getElementById('error-correo');
        errorEl.style.display = 'block';
    } else  {
        const errorEl = document.getElementById('error-correo');
        errorEl.style.display = 'none';
    }

    if (!mailInput.checkValidity() || !nombreInput.checkValidity()) {
        return;
    }

    usuarios.push({
        nombre: nombreInput.value,
        mail: mailInput.value,
    });

    // TODO: Validar que el cliente no exista previamente

    nombreInput.value = '';
    mailInput.value = '';

    console.log(usuarios);
})
