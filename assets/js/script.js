//Refactorización a ES6+   =============
//======================================

// Objeto usuario usando const (Declaración de variables)
const usuario = {
    nombre: "Ana",
    edad: 24,
    ciudad: "Barcelona"
};

// Arrow function con destructuring y template literals
const crearMensajePresentacion = ({ nombre, edad, ciudad }) => 
    `Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en la ciudad de ${ciudad}.`;

// Llamada a la función
const mensajeDeBienvenida = crearMensajePresentacion(usuario);

// Mostrar en consola
console.log(mensajeDeBienvenida);

// Mostrar en pantalla
document.getElementById("resultado").textContent = mensajeDeBienvenida;
