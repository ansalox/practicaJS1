// Suma de dos numeros
const sumaDosNumeros = () => {
  let num1 = prompt("ingrese numero 1"); // Pedimos numero 1
  let num2 = prompt("ingrese numero 2"); // Pedimos numero 2
  console.log(num1, num2); // Vemos si en consola trae valores
  // Convertimos a entero con "parseInt"
  let resultado = parseInt(num1) + parseInt(num2); // Guardamos el resultado en una variable
  alert("la suma es " + resultado); // Mostramos el resultado
};
