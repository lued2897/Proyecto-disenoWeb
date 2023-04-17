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

    if (!nombre.value || !code.value || !precio.value) {
        return;
    }

    nombre.value = '';
    code.value = '';
    precio.value = '';
    tipo.value = 'Cheetos';

    modificarProductoModal.hide();
    datoModificadoModal.show();

});

