import { PetDatabase } from "../database/petDatabase"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { Ipet, PET_SYZE } from "../types/pets"

export class ptBusiness {
    public async getPets() {

        const getpets = new PetDatabase()
        const result = getpets.getPets()

        return result
    }

    public async getPetsById(id: string) {

        const getpets = new PetDatabase()
        const result = await getpets.getPetsById(id)

        if (result.length === 0) {
            throw new NotFoundError('Id não encontrado!')
        }

        return result
    }

    public async createPet(id: string, name: string, price: number, size: PET_SYZE) {

        const newPet = {
            id: id,
            name: name,
            price: price,
            size: size
        }

        const createPet = new PetDatabase()
        const petsDbExists = await createPet.getPetsById(id)

        if (petsDbExists.length > 0) {
            throw new BadRequestError('Id já existente!')
        }

        if(typeof price !== 'string' || typeof price !== 'number' || typeof size !== 'string'){
            throw new BadRequestError('Insira número apenas no PRICE!')
        }

        if (typeof price !== "number") {
            throw new BadRequestError('cdscsd')
        }

        const result = await createPet.createPets(newPet)

        return result
    }
}