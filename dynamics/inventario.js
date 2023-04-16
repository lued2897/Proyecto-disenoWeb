let productos = [];
const inventarioBody = document.getElementById('inventario-body');

fetch('./db/inventario.json', {cache: 'no-cache'})
    .then(data => {
        return data.json();
    })
    .then(arr => {
        productos = arr;
        console.log(productos);
    });


const inventarioBoton = document.getElementById('inventario-button');

inventarioBoton.addEventListener('click', () => {
    inventarioBody.innerHTML = '';
    console.log(productos);
    for (const producto of productos) {
        inventarioBody.innerHTML +=  `
                <div class="mt-4">
                    <p>Nombre</p>
                    <div class="fake-input">${producto.nombre}</div>
                    <p>Cantidad Total</p>
                    <div class="fake-input">${producto.cantidad}</div>
                    <p>Venta Total</p>
                    <div class="fake-input">${producto.venta}</div>
                </div>
            `;
    }

    if (inventarioBody.innerHTML.trim().length === 0) {
        inventarioBody.innerHTML = '<h4>No hay productos...</h4>';
    }

});
