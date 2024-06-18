/*Dado el siguiente listado de objetos:
const libros = [ { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año:
1967 }, { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 }, {
titulo: "1984", autor: "George Orwell", año: 1949 } ]

Genere una lista que contenga solo los autores de dicha lista en una variable
llamada: autores. */

const librosAutores = [
    {titulo: "Cien anos de soledad", autor: "Gabriel Garcia Marquez", ano: 1967},
    {titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", ano: 1605},
    {titulo: "1984", autor: "George Orwell", ano: 1949}
]
const autores = [];

for (const item of librosAutores) {
    
    autores.push(item.autor)
    console.log("Se agrego:", item.autor)
    console.log(autores)
}