const ventana = document.getElementById('ventana');

let productos = [];
let usuarios = [];

fetch('./db/inventario.json', {cache: 'no-cache'})
    .then(data => {
        return data.json();
    })
    .then(arr => {
        productos = arr;
        productos.sort(() => (Math.random() > 0.5) ? 1 : -1);
        console.log(productos);

        ventana.innerHTML = '';
        let codigo = 1;
        for (const producto of productos) {

            let ruta = '';
            if (producto.nombre === 'Sabritas') {
                ruta = './img/papas-sal.png';
            } else if (producto.nombre === 'Rancheritos') {
                ruta = './img/rancheritos.png';
            } else if (producto.nombre === 'Doritos') {
                ruta = './img/doritos.png';
            } else if (producto.nombre === 'Cheetos') {
                ruta = './img/cheetos.png';
            }

            const rowParent = document.createElement('div');
            rowParent.classList.add('row');

            const row = document.createElement('div');
            row.classList.add('row');
            row.classList.add('fila');
            row.innerHTML = '';

            for (let i = 0; i < 6; i++) {
                row.innerHTML += `
                        <div class="col-2" style="padding: 0px; padding-top: 0.5rem  !important;">
                            <img src="${ruta}" width="40rem" alt="">
                        </div>
                `;
            }

            rowParent.appendChild(row);

            const row2 = document.createElement('div');
            row2.classList.add('row');
            row2.classList.add('fila2');
            row2.classList.add('justify-content-evenly');
            row2.innerHTML = '';

            for (let i = 0; i < 6; i++) {
                row2.innerHTML += `
                            <div>
                                <span id="codigo-${codigo}">${codigo}</span><span class="precio"> $${producto.precio}</span>
                            </div>
                `;
                codigo++;
            }

            rowParent.appendChild(row2);

            ventana.appendChild(rowParent);
        }

    });


