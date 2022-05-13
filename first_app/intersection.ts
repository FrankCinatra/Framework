//Tipos
type User = {
    name: string;
    startDate: Date;
};

type Admin = {
    name: string;
    permission: string[];
};

type UserAdmin = User & Admin;

const doctor: UserAdmin = {
    name: "Tommy",
    startDate: new Date(),
    permission: ["ver chart de paciente"]
};

//Interfaces
//Tipos
interface User2{
    name: string;
    startDate: Date;
};

interface Admin2{
    name: string;
    permission: string[];
};

interface UserAdmin2 extends User, Admin{}