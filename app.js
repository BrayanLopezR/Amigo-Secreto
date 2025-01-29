
let amigos= []

function agregarAmigos(){
    nuevoAmigo= document.getElementById("nombreAmigo").value;
    
    if(nuevoAmigo.trim()!==""){
        nombresAmigos.push(nuevoAmigo);
        document.getElementById("nombreAmigo").value ="";
        mostrarListaAmigos();
    }
}

function mostrarListaAmigos(){

    let listaAmigos=document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";

    for(let amigo of nombresAmigos){
        let nuevoElemento=document.createElement("li")
        nuevoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoElemento);

    }

}

function seleccionarAmigoAleatorio(amigos) {
    if (!Array.isArray(amigos) || amigos.length === 0) {
      return "No hay amigos en la lista."; 
    }
  
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    return amigos[indiceAleatorio];
  }

  // esto es una prueba a ver que pex

  let lolAlas11