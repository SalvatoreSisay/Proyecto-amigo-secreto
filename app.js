// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function agregarAmigo() {
	const input = document.getElementById('amigo');
	const nombre = input.value.trim();
	const lista = document.getElementById('listaAmigos');
	let error = document.getElementById('errorMensaje');
	if (!error) {
		error = document.createElement('li');
		error.id = 'errorMensaje';
		error.style.color = 'red';
		error.style.listStyle = 'none';
        error.style.fontFamily = 'Arial, sans-serif';
		lista.parentNode.insertBefore(error, lista);
	}
	if (!nombre) {
		error.textContent = 'Por favor, ingrese un nombre';
		return;
	} else {
		error.textContent = '';
	}
	nombresAmigos.push(nombre);
	input.value = '';
	mostrarNombres();
}

function mostrarNombres() {
	const lista = document.getElementById('listaAmigos');
	lista.innerHTML = '';
	nombresAmigos.forEach(function(nombre) {
		const li = document.createElement('li');
		li.textContent = nombre;
		lista.appendChild(li);
	});
}

