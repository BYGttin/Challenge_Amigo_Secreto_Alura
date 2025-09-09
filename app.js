// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigolist = [];
let minimoAmigos = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo(){
    let amigon = document.getElementById("amigo").value
    
    if (!amigolist.includes(amigon)){
        amigolist.push(amigon);
    } else{
        if (amigon == ""){
            alert("Por favor ingresa un nombre valido")
        }
    }

    let listaMigos = amigolist.map(a => `<li>${a}</li>`).join("");
    document.getElementById("amigo").value = "";
    return asignarTextoElemento("listaAmigos", listaMigos);

}

function sortearAmigo(){
    let amigoSorteado = Math.floor(Math.random() * amigolist.length); /*Buscar explicacion*/
    let nombreAmigo = amigolist[amigoSorteado]; /*Esta parte me queda poco clara*/

    if (amigolist.length == minimoAmigos){
            asignarTextoElemento("resultado", "Añade mas amigos");
    } else{
            asignarTextoElemento("resultado", `El amigo secreto sorteado es: ${nombreAmigo}`);
            document.getElementById("listaAmigos").innerHTML = "";
    }
}
