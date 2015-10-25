var div= document.querySelector(".salida");
function unsort (a,b){
	return Math.random() *10 -5;
}



	
function limpiarSalida(){
	div.innerHTML="";
}


function nuevaLista(){
	var div= document.querySelector(".contenido");
	function agregarTexto (texto){
 	var txt= document.createTextNode(texto);
 	div.appendChild(txt);
 	div.appendChild(document.createElement("br"));
}
list.sort(unsort);
agregarTexto(list.toString());
	
	}
	function nuevo(){
		var x = document.createElement("INPUT");
    x.setAttribute("type", "number");
    x.setAttribute("value", "12345");
    document.body.appendChild(x);
	}


var list =[];
	for (var i = 0; i <=5; i++) {
		list.push(i);
	};
list.sort(unsort);
 
 function agregarTexto (texto){
 	var txt= document.createTextNode(texto);
 	div.appendChild(txt);
 	div.appendChild(document.createElement("br"));

 }
 agregarTexto(list.toString());
 agregarTexto("");
 function insertSort (lista) {
 	var i,j;
 	var aux;
 	for (i = 0; i < lista.length -1; i++) {
 		if(lista[i]>lista[i+1]){
 			aux= lista[i+1];
 			lista[i+1] = lista [i];
 			lista[i] = aux;
 			j=i;
 			while(j>0 && lista[j] < lista[j-1]) {
 				aux= lista[j-1];
 			    lista[j-1] = lista [j];
 			    lista[j] = aux;
 			    j--;
 				
 			}
 		}
 	}
 }
 insertSort(list);
 agregarTexto(list.toString());
 //paso a paso
 //list.sort(unsort);
