/*Dado el siguiente objeto:
const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };
Modifique el valor del salario, siempre y cuando la antigüedad sea mayor a 5 años, el
aumento será del 10%. Imprima los nuevos valores. */

const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };

console.log(empleado)


if (empleado.antiguedad > 5) {
    empleado.salario += empleado.salario * 0.1;

}

console.log(empleado)
