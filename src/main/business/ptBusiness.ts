import { db } from "../database/knex"
import { PetDatabase } from "../database/petDatabase"
import { BadRequestError } from "../errors/BadRequestError"
import { Pet } from "../model/Pet"
import { Ipet } from "../types/pets"

const TABLE_NAME = 'pets'

export class ptBusiness {
    public async getPets(){

        const getpets = new PetDatabase()
        const result = getpets.getPets()

        return result
    }
    public async createPet(id: string, name:string, price: number, size: string){

        const newPet = {
            id: id,
            name: name,
            price: price,
            size: size
        }

        // const validation = await db(TABLE_NAME).where({id: id})

        // if(validation.length > 0){           
        //     throw new BadRequestError('ID já cadastrado!')
        // }

        const result =  await db(TABLE_NAME).insert(newPet)
        return result
    }
}