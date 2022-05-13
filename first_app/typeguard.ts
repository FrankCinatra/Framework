class Bird{
    fly(): void{
        console.log("volando");
    }
}

class Fish{
    swim(): void{
        console.log("nadando");
    }
}

type UnknownPet = Fish| Bird;

function printPet(pet: UnknownPet){
    /*if('swim' in pet){
        pet.swim();
    }
    if(pet as Fish){
        (pet as Fish).swim();
    }*/
    if (pet instanceof Fish)    pet.swim();
}

const pet = new Fish();
printPet(pet);