var numeros: Array<number> = [1, 2, 3, 4, 5];

console.log(numeros.map(n => n+2));

numeros.forEach(
    (elemento, indice, array) => {
        console.log(`numeros[${indice}] = ${elemento}`);
    }
);

//var multiplicar = (a, b) => a * b;

var saludar = () => { console.log('Hola') };