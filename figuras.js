console.log(`HELLO WORLD`);

//CUADRADO
//const lado = 5;
console.group("Cuadrado");
//console.log(`Los lados del cuadrado miden ${lado}`);

/*const perimetro = lado*4;
console.log(`El perimetro del cuadrado de lado ${lado} es ${perimetro} m`);

const area = lado*lado;
console.log(`el área del cuadrado de lado ${lado} es ${area} m^2`)*/

function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}
console.groupEnd();

//TRIANGULO
//const base = 3;
//const altura = 4;
//const hipotenusa = 5;

console.group("Triangulo");

/*console.log(`Los lados del triangulos son: ${base} m, ${altura} , y ${hipotenusa} m`);

const perimetrotri = base + altura + hipotenusa;
console.log(`El perimetro del triangulo es ${perimetrotri} m`);

const areatri = (base * altura) / 2;
console.log(`El área del triangulo es ${areatri} m^2`);*/

function perimetroTriangulo(base,altura,hipotenusa){
    return base+altura+hipotenusa;
}

function areaTriangulo(base,altura){
    return base*altura/2;
}
console.groupEnd();

//Circulo

const Pi = Math.PI;
//const radio = 5;

console.group("Circulo");

/*console.log(`El radio del circulo es ${radio} m`);

const perimetrocircu = 2*Pi*radio;
console.log(`El perimetro de la circunferencia es ${perimetrocircu} m`);

const areacir = Pi * radio*radio;
console.log(`El área del circulo es ${areacir} m^2`);*/
function perimetroCirculo(radio){
    return 2*Pi*radio;
}

function areaCirculo(radio){
    return Pi*radio*radio;
}
console.groupEnd();


//CON EL HTML
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function CalcularPerimetroTriangulo(){
    const inputBase = document.getElementById("InputBase");
    const inputAltura = document.getElementById("InputAltura");
    const inputHipotenusa = document.getElementById("InputHipotenusa");
    const valueBase = parseInt(inputBase.value);
    const valueAltura = parseInt(inputAltura.value);
    const valueHipotenusa = parseInt(inputHipotenusa.value);
    const perimetro = perimetroTriangulo(valueBase,valueAltura,valueHipotenusa);
    alert(perimetro);
}

function CalcularAreaTriangulo(){
    const inputBase = document.getElementById("InputBase");
    const inputAltura = document.getElementById("InputAltura");
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;
    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function CalcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}

function CalcularAlturaIsoceles(){
    const inputLado1 = document.getElementById("InputLado1");
    const inputLado2 = document.getElementById("InputLado2");
    const lado1 = inputLado1.value * inputLado1.value;
    const lado2 = (inputLado2.value / 2) * (inputLado2.value / 2);
    if((inputLado2.value/2)>inputLado1.value){
        alert("Este triangulo no existe");
    }
    else{
        const altura = Math.sqrt(lado1 - lado2);
        alert(altura);
    }
    
}