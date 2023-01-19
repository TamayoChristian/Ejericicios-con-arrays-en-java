const personas = [
    {
        cédula: "0001",
        apellidos: "Love",
        nombres: "Kevin",
        sexo:"M",
        peso: 70.4,

    },
    {
        cédula: "0002",
        apellidos: "Hurtado",
        nombres: "Jerico",
        sexo:"M",
        peso: 73.4,

    },
    {
        cédula: "0003",
        apellidos: "Paredes",
        nombres: "Antonio",
        sexo:"M",
        peso: 90,

    },
    {
        cédula: "0004",
        apellidos: "Parra",
        nombres: "Uriel",
        sexo:"M",
        peso: 78.3,

    },
    {
        cédula: "0005",
        apellidos: "Martinez",
        nombres: "Javier",
        sexo:"M",
        peso: 78.4,

    },
    {
        cédula: "0006",
        apellidos: "Obando",
        nombres: "Mellanie",
        sexo:"F",
        peso: 72.2,

    },
]
const ciudades = [
    {nombres: "Esmeraldas", temp: 28, población: 450000, país:"Ecuador"},
    {nombres: "Guayaquil", temp: 30, población: 3000000, país:"Ecuador"},
    {nombres: "Quito", temp: 17, población: 1500000, país:"Ecuador"},
    {nombres: "Ambato", temp: 18, población: 369000, país:"Ecuador"},
    {nombres: "Portoviejo", temp: 22, población: 500000, país:"Ecuador"},
    {nombres: "Cuenca", temp: 13, población: 400000, país:"Ecuador"},
    {nombres: "Cuzco", temp: 12, población: 437538, país:"Perú"},
    {nombres: "Chiclayo", temp: 21, población: 609400, país:"Perú"},
    {nombres: "Iquitos", temp: 32, población: 163502, país:"Perú"},
    {nombres: "Bogotá", temp: 13, población: 7901653, país:"Colombia"},
    {nombres: "Barranquilla", temp: 34, población: 1200000, país:"Colombia"},
]
module.exports = {
    "personas": personas,
    ciudades,
}