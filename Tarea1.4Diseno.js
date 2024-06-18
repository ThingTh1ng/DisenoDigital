/*Dado el siguiente objeto:
const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };
Desestructure el objeto para extraer los valores en 3 variables diferentes y mostrarlas
en consola.*/

const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };

const Nombre = persona.nombre;
const Edad = persona.edad;
const Ciudad = persona.ciudad;

console.log(Nombre);
console.log(Edad);
console.log(Ciudad);


const { nombre } = persona;
const { edad } = persona;
const { ciudad } = persona;


console.log(nombre); 
console.log(edad);   
console.log(ciudad); 
