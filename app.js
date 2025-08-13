// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtenemos la referencia al campo de entrada y a la lista
    const campoAmigo = document.getElementById('amigo');
    const lista = document.getElementById('listaAmigos');
    
    // Obtenemos el nombre del amigo y eliminamos espacios en blanco
    const nombreAmigo = campoAmigo.value.trim();

    // 1. Verificamos que se haya ingresado un nombre
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // Detiene la ejecución si el campo está vacío
    }

    // 2. Verificamos que el nombre no esté ya en la lista
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado. Por favor, ingresa uno diferente.');
        campoAmigo.value = ''; // Limpiamos el campo
        return; // Detiene la ejecución si el nombre está repetido
    }

    // 3. Agregamos el amigo al array y actualizamos la lista en pantalla
    amigos.push(nombreAmigo);
    lista.innerHTML += `<li>${nombreAmigo}</li>`; // Añadimos el nombre a la lista visible
    
    // Limpiamos el campo de entrada para el siguiente nombre
    campoAmigo.value = '';
    campoAmigo.focus(); // Devolvemos el cursor al campo de entrada
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    // Verificamos que haya suficientes amigos para sortear
    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para poder realizar el sorteo.');
        return;
    }

    // Obtenemos un índice aleatorio del array de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    // Mostramos el resultado en la lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>! 🎉</li>`;
}
