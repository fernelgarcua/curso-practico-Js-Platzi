//const precioOriginal = 100;
//const descuento = 15;
let descuento, cupon, premioPalabra; 
const palabra = ["fernel", "augusto"];

function calcularPrecioConDescuento(precio, descuento,cupon,premioPalabra){
    
    const porcentajePreciConDescuento = 100 - (descuento);
    const porcentajePreciConCupon = porcentajePreciConDescuento -cupon;
    const porcentajerConTodo = porcentajePreciConCupon - premioPalabra;
    const PrecioConDescuento = (precio * porcentajerConTodo) / 100;
    return PrecioConDescuento;
}

//const porcentajePreciConDescuento = 100 - descuento;
//const PrecioConDescuento = (precioOriginal * porcentajePreciConDescuento) / 100;

//console.log(`El precio original es ${precioOriginal} su descuento es ${descuento} despues de aplicado el descuento el precio es: ${PrecioConDescuento}`);

function onButtonPrice(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const inputCupon = document.getElementById("InputCupon");
    const inputPalabra = document.getElementById("PalabraClave");
    let premio;
    switch(inputPalabra.value){
        case palabra[0]:
            premio = 50;
            break;
        case palabra[1]:
            premio = 10;
            break;
        default:
            premio = 0;
            
    }
    
    const valorCupon = parseInt(inputCupon.value);
    const PrecioConDescuento = calcularPrecioConDescuento(inputPrice.value,inputDiscount.value,valorCupon,premio);
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = (`El precio con descuento es: ${PrecioConDescuento} pesos`);
    
    
}