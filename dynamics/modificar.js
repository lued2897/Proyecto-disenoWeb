const modBoton = document.getElementById('modificar-button');
modBoton.addEventListener('click', () => {
    const nombre = document.getElementById('mod-nombre');
    const code = document.getElementById('mod-code');
    const precio = document.getElementById('mod-precio');
    const tipo = document.getElementById('tipo');

    document.getElementById('nombre-producto-mod').innerText = nombre.value;
    document.getElementById('code-producto-mod').innerText = code.value;
    document.getElementById('precio-producto-mod').innerText = precio.value;
    document.getElementById('tipo-producto-mod').innerText = tipo.value;

    nombre.value = nombre.value.trim();
    code.value = code.value.trim();
    precio.value = precio.value.trim();

    if (!nombre.value) {

        console.log('lel');
        const errorEl = document.getElementById('error-nombre-mod');
        errorEl.style.display = 'block';
    } else {
        const errorEl = document.getElementById('error-nombre-mod');
        errorEl.style.display = 'none';
    }
    if (!code.value) {
        const errorEl = document.getElementById('error-code-mod');
        errorEl.style.display = 'block';
    } else  {
        const errorEl = document.getElementById('error-code-mod');
        errorEl.style.display = 'none';
    }

    if (!precio.value || isNaN(parseFloat(precio.value))) {
        const errorEl = document.getElementById('error-precio-mod');
        errorEl.style.display = 'block';
    } else {
        const errorEl = document.getElementById('error-precio-mod');
        errorEl.style.display = 'none';
    }

    if (!nombre.value || !code.value || !precio.value) {
        console.log('asdf');
        return;
    }


    nombre.value = '';
    code.value = '';
    precio.value = '';
    tipo.value = 'Cheetos';

    modificarProductoModal.hide();
    datoModificadoModal.show();

});

