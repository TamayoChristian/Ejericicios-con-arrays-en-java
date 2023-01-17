const datos = require("./datos");
const { personas, ciudades } = require("./datos");
console.log("Separando los datos en un archivo");
//console.log(personas);
console.log(ciudades);

//2.Listar las personas de sexo femenino
const mujeres = personas.filter(datos => datos.sexo== "F" );
console.log("Listado de mujeres ", mujeres)

//3.Listado de ciudades con temperaturas mayores a 25 grados
const calor = ciudades.filter(datos => datos.temp > 25 );
console.log("Listado de ciudades con más de 25 grados ", calor)

//4. Hallar el total de la población en el array ciudades
const suma = ciudades.reduce((ac, va) => {
    return ac+va.población;
},0);
console.log("La suma total es: ",suma);

//5. Encuentra la sumatoria de los pesos de las personas de sexo masculino (array personas)
const masas = personas.filter(datos => datos.sexo == "M").reduce((ac, va) => ac + va.peso,0);
//const masas2 = masas.reduce((ac, va) => ac + va.peso,0);
console.log("La sumatoria de los pesos es: ", masas,"kg");