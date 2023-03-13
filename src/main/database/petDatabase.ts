import { Ipet } from "../types/pets"
import { BaseDatabase } from "./BaseDatabase"

export class PetDatabase extends BaseDatabase {
    public static TABLE_USERS = 'pets'

    public async getPets() {
        const petsDB: Ipet[] = await BaseDatabase.connection(PetDatabase.TABLE_USERS)
        return petsDB;
    }

    public async createPets(newPet: Ipet) {
        const petsDB: Ipet[] = await BaseDatabase.connection(PetDatabase.TABLE_USERS).insert(newPet)

        return petsDB
    }

    public async getPetsById(id: string) {

        const petsDB: Ipet[] = await BaseDatabase.connection(PetDatabase.TABLE_USERS).where({ id: id })
        
        return petsDB;
    }

}