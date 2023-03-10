import { Ipet } from "../types/pets"
import { BaseDatabase } from "./BaseDatabase"

export class PetDatabase extends BaseDatabase {
    public static TABLE_USERS = 'pets'

    public async getPets() {
        const petsDB:Ipet[] = await BaseDatabase.connection(PetDatabase.TABLE_USERS)
        return petsDB;
    }    
}