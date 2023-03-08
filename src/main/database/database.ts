import { PET_SYZE, Tpet } from "../types/pets";
import { TClient } from "../types/clients";

export const pets: Tpet[] = [{
    id: "p001",
    name: "FVF",
    price: 5,
    size: PET_SYZE.SMALL
}]

export const clients: TClient[] = [{
    id: "u001",
    name: "Luiz",
    email: "teste@email.com",
    password: "A01B03",
    age: 22
}]