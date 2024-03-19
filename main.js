/* 1-Variables
2-Condicionales
3-Ciclos 
4-Funciones */

let codigoProducto = parseInt(prompt('Ingresa el codigo del auto a comprar\n1-Subaru WRX STI...$30000\n2-Toyota Supra...$150000\n3-Mazda RX-7...$20000\n0-Salir del programa'));
let total = 0;
const IVA = 0.21;
const DESC_EF = 0.1;
const RECARGO_CREDITO = 0.04;


while (codigoProducto != 0) {

    switch (codigoProducto) {
        case 1:
            total += 30000;
            alert('Agregaste Subaru WRX STI a tu carrito, Total acumulado $' + total);
            break;
        case 2:
            total += 150000;
            alert('Agregaste Toyota Supra a tu carrito, Total acumulado $' + total);
            break;
        case 3:
            total += 20000;
            alert('Agregaste Mazda RX-7 a tu carrito, Total acumulado $' + total);
            break;
        default:
            alert('Codigo invalido');
            break;
    }

    codigoProducto = parseInt(prompt('Ingresa el codigo del auto a comprar\n1-Subaru WRX STI...$30000\n2-Toyota Supra...$150000\n3-Mazda RX-7...$20000\n0-Salir del programa'));

}

if (total != 0) {

    let modoPago = prompt('Como deseas abonar?\n1-Efectivo\n2-Debito\n3-Credito');

    if (modoPago == 1) {
        alert('Total a pagar $' + aplicarImpuestosyDescuentos(IVA, DESC_EF));
    } else if (modoPago == 2) {
        alert('Total a pagar $' + aplicarImpuestosyDescuentos(IVA, 0));
    } else if (modoPago == 3) {
        alert('Total a pagar $' + aplicarImpuestosyDescuentos(IVA + RECARGO_CREDITO, 0));
    } else {
        alert('Opcion invalida!');
    }

}

function aplicarImpuestosyDescuentos(impuestos, descuentos) {
    let totalConImpuestos = total * (1 + impuestos);
    let totalConImpuestosYDescuentos;
    if (descuentos != 0) {
        totalConImpuestosYDescuentos = totalConImpuestos * (1 - descuentos);
    } else {
        totalConImpuestosYDescuentos = totalConImpuestos;
    }
    return totalConImpuestosYDescuentos;
}

