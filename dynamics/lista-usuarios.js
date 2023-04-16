let usuarios = [];
const modalBody = document.getElementById('lista-usuarios-body');

fetch('./db/usuarios.json', {cache: 'no-cache'})
    .then(data => {
        return data.json();
    })
    .then(arr => {
        usuarios = arr;
        console.log('fetcheando');

    });

modalBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.parentElement.remove();
    }

    if (modalBody.innerHTML.trim().length === 0) {
        modalBody.innerHTML = '<h4>No hay usuarios...</h4>';
    }
});


const listaBoton = document.getElementById('lista-usuarios-button');

listaBoton.addEventListener('click', () => {
    modalBody.innerHTML = '';
    for (const [i, usuario] of usuarios.entries()) {
        modalBody.innerHTML +=  `
                <div class="row mt-4">
                    <div class="col">
                        <p>Cliente</p>
                        <div class="usuario-nombre fake-input">${usuario.nombre}</div>
                        <p>email</p>
                        <div class="usuario-mail fake-input">${usuario.mail}</div>
                    </div>
                    <div class="col">
                        <button id="usuario-lista-${i}" class="delete">DELETE</button>
                    </div>
                </div>
            `;
    }

    if (modalBody.innerHTML.trim().length === 0) {
        modalBody.innerHTML = '<h4>No hay usuarios...</h4>';
    }

});
