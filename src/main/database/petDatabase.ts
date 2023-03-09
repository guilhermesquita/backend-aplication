import { Pet } from "../model/Pet";
import { AppDataSource } from "../index";

const pet = new Pet()
pet.id = 'p001'
pet.name = 'Thor'
pet.price = 320.12
pet.size = 'Pequeno Porte'


await AppDataSource.manager.save(pet)
console.log("Photo has been saved. Pet id is", pet.id)