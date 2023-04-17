const billullo = document.getElementById('billullo');
const moneda = document.getElementById('moneda');
const dineroDiv = document.getElementById('dinero');

let dinero = 0;

billullo.addEventListener('click', () => {
    dinero += 20;
    dineroDiv.innerText = parseFloat(dinero).toFixed(2);
});

moneda.addEventListener('click', () => {
    dinero += 5;
    dineroDiv.innerText = parseFloat(dinero).toFixed(2);
});

function pagar(codigo) {
    console.log(codigo);
    const total = parseFloat(codigo);

    if (dinero >= total && !!total) {
        alert(`Recibe tu producto, tu cambio es de ${dinero - total}`);
    } else if (isNaN(total)){
        alert('No has seleccionado ningún producto válido');
    } else {
        alert('Te falta pagar');
    }

    dinero = 0;
    dineroDiv.innerText = parseFloat(dinero).toFixed(2);
}
