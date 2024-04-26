/* // Función para encontrar el menor de dos números usando escritura tradicional
function menorDeDosNumeros(num1, num2) {
    if (num1 < num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  // Función para encontrar el mayor de dos números usando escritura tradicional
  function mayorDeDosNumeros(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  // Obtén los valores numéricos de dos números
  var num1 = 3;
  var num2 = 10;
  
  // Utiliza las funciones para obtener el menor y el mayor
  var menor = menorDeDosNumeros(num1, num2);
  var mayor = mayorDeDosNumeros(num1, num2);
  
  // Bucle for desde el menor hasta el mayor, fuera de las funciones
  for (var i = menor; i <= mayor; i++) {
    console.log(i);
  } */
  
  5 > 10 ? console.log("Es verdad") : console.log("Es mentira");