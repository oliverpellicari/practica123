// Función 1: Sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función 2: Convertir una cadena a mayúsculas
function enMayusculas(texto) {
    return texto.toUpperCase();
}

// Clase Persona que define una persona con nombre y edad
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para presentar a la persona
    presentar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// Exportar las funciones y la clase
module.exports = { sumar, enMayusculas, Persona};
