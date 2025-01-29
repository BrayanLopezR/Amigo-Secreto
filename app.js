
let amigos= []

function agregarAmigos(){
    nuevoAmigo= document.getElementById("nombreAmigo").value;
    
    if(nuevoAmigo.trim()!==""){
        nombresAmigos.push(nuevoAmigo);
        document.getElementById("nombreAmigo").value ="";
        mostrarListaAmigos();
    }
}
