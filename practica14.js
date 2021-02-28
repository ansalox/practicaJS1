// Suma de dos numeros
const sumaDosNumeros = () => {
  let num1 = prompt("ingrese numero 1");
  let num2 = prompt("ingrese numero 2");
  let resultado = parseInt(num1) + parseInt(num2);
  alert("la suma es " + resultado);
};
// Resta de dos numeros
const restaDosNumeros = () => {
  let num1 = prompt("ingrese numero 1");
  let num2 = prompt("ingrese numero 2");
  let resultado = parseInt(num1) - parseInt(num2);
  alert("la resta es " + resultado);
};
// Multiplicación de dos numeros
const multiplicarDosNumeros = () => {
  let num1 = prompt("ingrese numero 1");
  let num2 = prompt("ingrese numero 2");
  let resultado = parseInt(num1) * parseInt(num2);
  alert("la multiplicación es " + resultado);
};
// Dividir de dos numeros
const dividirDosNumeros = () => {
  let num1 = prompt("ingrese numero 1");
  let num2 = prompt("ingrese numero 2");
  // Validamos que el numero 2 no sea Cero
  if (num2 == 0) {
    alert("No es posible dividir por cero");
  } else {
    let resultado = parseInt(num1) / parseInt(num2);
    alert("la división es " + resultado);
  }
};