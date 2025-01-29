let nombresAmigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("nombresAmigos").value;
    
    if (nuevoAmigo) {
        nombresAmigos.push(nuevoAmigo);
        document.getElementById("nombresAmigos").value = "";
        mostrarListaAmigos();
    }
}

function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let amigo of nombresAmigos) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoElemento);
    }
}

function sortearAmigo() {
    const amigoAleatorio = seleccionarAmigoAleatorio(nombresAmigos);
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = "El amigo secreto es: " + amigoAleatorio;
}

function seleccionarAmigoAleatorio(amigos) {
    if (!Array.isArray(amigos) || amigos.length === 0) {
        return "No hay amigos en la lista."; 
    }
  
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    return amigos[indiceAleatorio];
}

  