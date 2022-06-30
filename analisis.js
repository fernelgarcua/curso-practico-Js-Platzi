const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(a,b){
        return a-b;
    }
);


function calcularMediana(lista){
    //ordenarLista(lista);
    let mediana;
    function esPar(numero){
        if(numero % 2 == 0){
            return true;
        }
        else{
            return false;
        }
    }
    
    const mitadLista = parseInt(lista.length/2);
    
    if(esPar(lista.length)){
        valor1 = lista[mitadLista];
        valor2 = lista[mitadLista-1];
        mediana = (valor1 + valor2)/2;
    }
    else{
        mediana = lista[mitadLista];
    }
    return mediana;
}

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

   //NUEVA MEDIANA SOLO DEL 10%

   const spliceStart = salariosColSorted.length*0.9;
   const spliceCount = salariosColSorted.length*0.1;
   const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

   function calcularMedianatop10(lista){
    //ordenarLista(lista);
    let medianatop10;
    function esPar(numero){
        if(numero % 2 == 0){
            return true;
        }
        else{
            return false;
        }
    }
    
    const mitadLista = parseInt(lista.length/2);
    
    if(esPar(lista.length)){
        valor1 = lista[mitadLista];
        valor2 = lista[mitadLista-1];
        medianatop10 = (valor1 + valor2)/2;
    }
    else{
        medianatop10 = lista[mitadLista];
    }
    return medianatop10;
}