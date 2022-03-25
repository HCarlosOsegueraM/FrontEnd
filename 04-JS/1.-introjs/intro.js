console.log("\n ****************** Variables *************");
var numero1;
numero1 = 4;
var numero2;
numero2= 2;
console.log("Numero 1: "+ numero1 + "Numero 2: " + numero2);

console.log("\n ****************** Cadenas *************");
var frase1 = "Ejemplo comillas dobles";
var frase2 = 'Ejemplo comillas simples';
var frase3 = `Ejemplo comillas ${frase1} invertidas`;
console.log(frase1 + "\n" + frase2 + "\n" + frase3);

console.log("\n ****************** Condicionales *************");
console.log(numero1 > numero2);

console.log("\n ****************** Operador logico AND *************");
console.log(true && true);

console.log("\n ****************** Operador logico OR *************");
console.log(false || false);

console.log("\n ****************** Arreglos *************");
let listaDeNumeros = [2,3,5,7,11,234];
console.log(listaDeNumeros);

listaDeNumeros.push(16);
listaDeNumeros.push(939);
console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

let listaDePalabras = ["Explorer","MisionComander","LaunchX","Inovaccion"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);

let palabra = "Explorer";
console.log(palabra[3]);
console.log(palabra.length);

console.log("\n ****************** Objetos *************");
let explorer = {
    nombre: "Nombre del Explorer",
    email: "correoprueba@innovaccion.mx",
    numReg: 12345,
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Taquería", "Pastelería", "Vacunación"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
};
console.log(explorer);
console.log(explorer.proPer.profesional);

console.log("\n ****************** Flujo COndicional *************");
let number1 = 2;
let number2 = 6;
console.log("\n ****************** if else *************");
if (number1 > number2 && number2 > 5) {
    console.log("El numero 1 es mayor que el numero 2");
}
else if (number1 == number2 || number1 < 3) {
    console.log("Los numeros son iguales");
}
else {
    console.log("El numero 2 es mayor que numero 1");
}

console.log("\n ****************** while *************");
let numberWhile = 5;
while (numberWhile <= 12) {
    console.log(numberWhile);
    numberWhile = numberWhile + 2;
}
console.log("Termina el while :" + numberWhile);

console.log("\n ****************** do while *************");
let numberDoWhile = 5;
do {
    numberDoWhile = numberDoWhile + 2;
    console.log(numberDoWhile);
} while (numberDoWhile <= 12);
console.log("Termina el do while :" +  numberDoWhile);

console.log("\n ****************** for *************");
let numeroFor = 5;
for (numeroFor; numeroFor <= 12; numeroFor ++) {
    console.log(numeroFor);
}
console.log("Termina el for :" +  numeroFor);

console.log("\n ****************** switch *************");
switch (prompt("¿Cómo está el clima?")) {
  case "lluvioso":
    console.log("No te vayas a mojar");
    break;
  case "soleado":
    console.log("Ponte bloqueador");
    break;
  case "nublado":
    console.log("Tapate bien");
    break;
  default:
    console.log("No se como está el clima");
    break;
}
console.log("Aquí salimos del Switch");