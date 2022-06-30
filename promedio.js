const lista = [100,200,300,500,10000];

let sumaLista=0;
for(let i=0;i<lista.length;i++){
    sumaLista = sumaLista + lista[i];    
}
const promedio = sumaLista/lista.length;
console.log(`la suma es ${sumaLista}`);
console.log(`el promedio es ${promedio}`);

function calcularMedia(lista){
 //   let sumaLista=0;
//for(let i=0;i<lista.length;i++){
    //sumaLista = sumaLista + lista[i];    
//}
const sumaLista = lista.reduce(
    function (valorAcumulado=0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
)

const promedio = sumaLista/lista.length;
return promedio;
}


//MEDIANA



