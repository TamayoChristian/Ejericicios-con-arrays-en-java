//Definición de un objeto
const estudiante = {
    matrricula:"1581",
    apellidos: "Pérez alcivar",
    nombres: "Juan Alberto",
    sexo: "M",
    edad: 20
};
console.log("Objeto estudiante", estudiante);
console.log("Los apaellidos de estudiante ", estudiante.apellidos);
console.log("En el 2024 tu edad será", estudiante.edad+1);

//array de objetos
const libros = [
    {codigo: "IS001", nombre_libro: "El alquimista", precio: 12.34},
    {codigo: "IS002", nombre_libro: "Investiguemos fisica", precio: 12.34},
    {codigo: "IS003", nombre_libro: "Algoritmos y pseudocodigo", precio: 12.34},
    {codigo: "IS004", nombre_libro: "Crimen y castigo", precio: 12.34},
];
console.log("Imprimir el array de objetos");
console.log(libros);
console.log("libro de la posición 2 ", libros[2]);

//use el foreeach para imprimir todos los libros
libros.forEach(item => console.log(item));
