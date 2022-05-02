interface Billable{
    currentBill(): String;
}

interface Flyable{
    altitude(): string;
}

abstract class Vehicle{
    constructor(
        protected readonly brandName: string,
        private readonly model: string,
        private readonly color: string,
        private price: number
    ){}

    get getPrice(){
        return `El precio actual es ${this.price}`;
    }

    set setPrice(value: number){
        this.price = value;
    }

    abstract drive(): void;
}

class Car extends Vehicle implements Billable{
    drive(): void {
        console.log(`Estoy conduciendo un auto ${this.brandName}`);
    }
    currentBill(): String {
        return `La factura actual es de 200`;
    }
}

class Airplane extends Vehicle implements Billable, Flyable{
    drive(): void {
        console.log(`Estoy conduciendo un vehiculo ${this.brandName}`);
    }
    currentBill(): String {
        return `La factura actual es de 800`;
    }
    altitude(): string {
        return '50.000 pies';
    }
}

const vehicle: Billable = new Car('Mazda','RX-7','Rojo',200);
//const vehicle: Flyable = new Airplane('Mazda','RX-7','Rojo',200);
////const vehicle: Billable = new Airplane('Mazda','RX-7','Rojo',200);