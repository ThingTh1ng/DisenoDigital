/*

3. Dado el siguiente listado:
const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2]
imprima el número mayor de la lista (sin ordenarla)

4. Con el listado anterior, calcule el promedio de todos los números impares

*/

const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2]
var numeroGrande = numeros[0];
var impares = [];
var suma = 0;
var promedio = 0;


for (var i = 0; i < numeros.length; i++) {
    
    if (numeros[i] > numeroGrande ) {
        numeroGrande = numeros[i];
    }

    if (numeros[i] %2 != 0) {
        impares.push(numeros[i]);
      }

  }

  for (var i = 0; i < impares.length; i++) {
    suma += impares[i];
    promedio = suma/impares.length;
  }

  console.log("Numero grande: ");
  console.log(numeroGrande);

  console.log("Numeros impares: ");
  console.log(impares);

  console.log("Suma de impares: ");
  console.log(suma);
  console.log("Promedio de impares: ");
  console.log(promedio);


