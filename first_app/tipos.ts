//string
var nombre: string = "Felipe";

//number
var edad: number = 10;

//boolean
var casado: boolean = false;

//Array
var amigos: Array<string> = ['carlos','jose','andres'];
var hermanos: string[] = ['Ricardo', 'Alfonso'];

//Enums = define un nuevo tipo
enum Parentesco {Padre, Madre, Hermano, Hermana, Hijo, Hija};
var parantesco: Parentesco = Parentesco.Padre;

//Any
var miVariable: any;
miVariable = 10;
miVariable = 'test';
miVariable = [1,2,3,4];

//Void
function grabarInformacion(informacion: string): void{
    // escribir nuestro codigo
}