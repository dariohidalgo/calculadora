// Con let definimos una variable que solo pertenecerá a un scope determinado
// Si es asignada fuera del ámbito de una función, pertenecerá al scope global

let nombre = "Juan";

const nombreApellido = {
    nombre: "Juan",
    apellido: "Paillet"
}

const var1;


var nombreVariable = ValorVariable;

function nombreFuncion(parametros) {

}

let nombreFuncion = (parametros) => {

}


// const apellido = "Paillet";

// apellido = "Gonzales"

function saludar1() {
    console.log(nombre);
}

function saludar2() {
    // Si es asignada dentro de una función, pertenecerá solamente al scope de la misma
    let nombre = "Jose";
    console.log(nombre);
}

saludar1();
saludar2();

let numero = 2;
numero = "HOla OCmo asd";

console.log(0 > null);
console.log(0 < null);