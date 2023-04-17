const billullo = document.getElementById('billullo');
const moneda = document.getElementById('moneda');

let dinero = 0;

billullo.addEventListener('click', () => {
    dinero += 20;
    console.log(dinero);
});

moneda.addEventListener('click', () => {
    dinero += 5;
    console.log(dinero);
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
}
