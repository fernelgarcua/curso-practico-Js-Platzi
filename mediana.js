
let lista;
function ordenarLista(lista){
    lista.sort(function(a,b){
        return a - b;
        
            });
}
   console.log(lista);
function calcularMediana(lista){
    ordenarLista(lista);
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


