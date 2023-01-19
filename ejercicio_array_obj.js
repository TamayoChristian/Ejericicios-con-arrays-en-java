const { getRandomValues } = require("crypto");
const { it } = require("node:test");
const internal = require("stream");
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

//Tarea 
//Ejercicio 6. Encuentre el promedio de las temperaturas (array ciudades)
const protemp = ciudades.reduce((ac,av) => ac+av.temp,0)
console.log("El promedio es ", protemp/ciudades.length)

//7) Listado de personas de sexo masculino ordenados ascendentemente (a-z)
const hombres = personas.sort((x, y) => x.apellidos.localeCompare(y.apellidos)).filter(item => item.sexo == "M")
console.log("Listado de personas de sexo masculino ordenados ascendentemente", hombres);

//8) Agregue el campo país al array de ciudades (Los países pueden ser Ecuador, Colombia, Perú ).
//Complete el array de ciudades con un total de 10 ciudades.  
//A continuación, calcule el total de habitantes del país "Ecuador"
const Ecuador = ciudades.filter(data => data.país == "Ecuador").reduce((ac, av) => ac+av.población,0);
console.log("La sumatoria de las ciudades de Ecuador es:", Ecuador);

/*
9) Escriba el código necesario para convertir el array de personas en una array que tenga 
objetos con los campos {apellidos, nombres}. El método map le sería de mucha utilidad.

Ejemplo: 

[
    {
        cedula:"0001",
        apellidos: "Plaza",
        nombres: "Andrés",
        sexo: "M",
        peso: 70.4
    },
    {
        cedula:"0002",
        apellidos:"Perdomo",
        nombres: "Angela",
        sexo: "F",
        peso: 55.40
    }
]

Resultado esperado: 
[
   {
        apellidos: "Plaza",
        nombres: "Andrés"
    },
    {
        apellidos: "Perdomo",
        nombres: "Angela"
    }
]
*/
const grava = personas.map((item) => {
        return item.apellidos;
});
console.log("Cambio",grava)