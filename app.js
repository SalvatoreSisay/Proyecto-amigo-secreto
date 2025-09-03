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

function sortearAmigo() {
	if (nombresAmigos.length === 0) {
		alert('No hay nombres ingresados, ingrese al menos un nombre!');
		return;
	}
	const indiceGanador = Math.floor(Math.random() * nombresAmigos.length);
	const ganador = nombresAmigos[indiceGanador];
	mostrarGanador(ganador);
}

function mostrarGanador(nombre) {
	const resultado = document.getElementById('resultado');
	resultado.innerHTML = '';
	const li = document.createElement('li');
	li.textContent = `¡El ganador es: ${nombre}!`;
	li.style.fontWeight = 'bold';
	resultado.appendChild(li);
}

// Permitir agregar amigo con Enter
document.addEventListener('DOMContentLoaded', function() {
	const input = document.getElementById('amigo');
	if (input) {
		input.addEventListener('keydown', function(e) {
			if (e.key === 'Enter') {
				agregarAmigo();
			}
		});
	}
});

