export class Computador{
    public procesador: Procesador;
    public memoria: Memoria;

    constructor(procesador: Procesador, memoria: Memoria){
        this.procesador = procesador;
        this.memoria = memoria;
    }
}

class Procesador{
    cores: number;
    velocidad: string;
    marca: string;

    constructor(cores: number, velocidad: string, marca: string){
        this.cores = cores;
        this.velocidad = velocidad;
        this.marca = marca;
    }
}

class Memoria{
    gigas: number;
    marca: string;

    constructor(gigas: number, marca: string){
        this.gigas = gigas;
        this.marca = marca;
    }
}