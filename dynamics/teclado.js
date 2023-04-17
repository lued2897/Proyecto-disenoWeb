const teclado = document.getElementById('numeros');
const codigo = document.getElementById('codigo');
const precio = document.getElementById('precio');

let codigoTecleado = '';
let precioFloat = 0;

teclado.addEventListener('click', (event) => {
    if (event.target.id.indexOf('teclado-') === -1) {
        return;
    }

    const tecla = event.target.id.slice('teclado-'.length);

    if (codigoTecleado.length < 3 && !isNaN(parseInt(tecla))) {
        codigoTecleado += tecla;
    }

    if (tecla === 'E' || parseInt(codigoTecleado) === 0) {
        codigoTecleado = '';
        precio.innerText = '00.00';
    }

    codigo.innerText = ('000' + codigoTecleado).slice(-3);
    mostrarPrecio(parseInt(codigoTecleado));
});

function mostrarPrecio(codigo) {
    if (isNaN(codigo)) {
        return;
    }

    const el = document.getElementById(`codigo-${codigo}`);
    if (!el) {
        precioFloat = (0.0).toFixed(2);
    } else {
        precioFloat = parseFloat(el.nextSibling.innerText.slice(2)).toFixed(2);
    }

    precio.innerText = precioFloat;
}

