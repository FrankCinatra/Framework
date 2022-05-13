class ArrayOfNumbers{
    constructor(private collection: number[]){}

    get(index: number): number{
        return this.collection[index];
    }
}

class ArrayOfString{
    constructor(private collection: string[]){}

    get(index: number): string{
        return this.collection[index];
    }
}

//Generic Class
class ArrayOfAny<Tipo>{
    constructor(private collection: Tipo[]){}
    
    get(index: number): Tipo{
        return this.collection[index];
    }
}

//const col = new ArrayOfAny<number>([1,2,3,4]);
const col = new ArrayOfAny(["a","b","c"]);


/**
 * Generic functions
 */
function printString(arr: string[]): void{
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

function printNumber(arr: number[]): void{
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

//Generic function
function printAny<Tipo>(arr: Tipo[]): void{
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

printAny<String>(['a','b','c']);
printAny<number>([1,2,5,3]);

/**
 * Constraint generic
 */
interface IMedia{
    print(): void;
}

class Movie implements IMedia{
    constructor(private name: string){}

    print(): void{
        console.log(`pelicula ${this.name}`);
    }
}

class tvShow implements IMedia{
    constructor(private name: string){}

    print(): void{
        console.log(`serie ${this.name}`);
    }
}

function printMedia<Tipo extends IMedia>(medias: Tipo[]){
    medias.forEach( (media)=>{
        media.print();
    });
}

const movie = new Movie('Scooby-Doo');
const tvshow = new tvShow('Games of Thrones');

const media: IMedia[] = [movie,tvshow];

printMedia(media);

/**
 * KeyOF
 */
function findValue<T extends object, U extends keyof T>(object: T, key: U){
    return object[key];
}

findValue({"name": "rodrigo", "age": 34}, "age");

/**
 * Built-in typescript
 */

class Vehicle2{
    branch: string = '';
    model: string = '';
}

function createVehicle(): Vehicle2{
    const vehicle: Partial<Vehicle2> = {};
    vehicle.branch = "Ford";

    return vehicle as Vehicle2;
}

let cars: Readonly<string[]> = ['Ford','Mazda'];