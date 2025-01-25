// Crear un array para almacenar los nombres de los amigos
let amigos = [];

// Implementa una función para agregar amigos
function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();
    const regex = /^[A-Za-z]+(\s[A-Za-z]+)*$/;
    if (nombre === '' || !regex.test(nombre)) {
        alert('Por favor, ingrese un nombre válido (solo letras y espacios entre palabras)');
        return;
    }
    amigos.push(nombre);
    mostrarListaAmigos();
    document.getElementById('amigo').value = '';
}