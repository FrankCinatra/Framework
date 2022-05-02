//Variable OBJETO
let persona: {
    //Tipos de dato que contiene
    nombre: string,
    edad: number,
    //Objeto dentro de este objeto
    direccion: {
        calle: string,
        comuna: string
    };
} = {
    nombre: 'Tommy',
    edad: 22,
    direccion: {
        calle: 'C. 100',
        comuna: 'Sepa'
    }
};

//console.log(persona);

//Variable ARRAY
let hobbies: string[] = ['futbol','leer', 'cantar'];
//console.log(hobbies);

//TUPLAS
let automovil: [string, number, string] = ['mazda', 2006, 'red'];

//crear tipo de dato para usar en variables
type vehiculoType = [string, number, string];
//usar tipo nuevo
let moto: vehiculoType = ['mazda', 2006, 'red'];

console.log(moto);