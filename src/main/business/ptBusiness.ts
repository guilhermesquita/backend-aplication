import { PetDatabase } from "../database/petDatabase"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { Pet } from "../model/Pet"
import { Ipet, PET_SYZE } from "../types/pets"

export class ptBusiness {
    public async getPets() {

        const getpets = new PetDatabase()
        const result = await getpets.getPets()

        const pets: Pet[] = result.map((pet) => new Pet(
            pet.id,
            pet.name,
            pet.price,
            pet.size
        ))

        return pets
    }

    public async getPetsById(id: string) {

        const getpets = new PetDatabase()
        const result = await getpets.getPetsById(id)

        if (result.length === 0) {
            throw new NotFoundError('Id não encontrado!')
        }

        const pets: Pet[] = result.map((pet) => new Pet(
            pet.id,
            pet.name,
            pet.price,
            pet.size
        ))

        return pets
    }

    public async createPet(input: any) {

        const {id, name, price, size} = input

        const createPet = new PetDatabase()
        const petsDbExists = await createPet.getPetsById(id)

        if (petsDbExists.length > 0) {
            throw new BadRequestError('Id já existente!')
        }

        if (typeof name !== 'string'  || typeof size !== 'string') {
            throw new BadRequestError('Insira número apenas no PRICE!')
        }

    
        const newPet = new Pet(
            id,
            name, 
            price,
            size
        )

        const newPetDB: Ipet = {
            id: newPet.getId(),
            name: newPet.getName(),
            price: newPet.getPrice(),
            size: newPet.getSize()
        }

        await createPet.createPets(newPetDB)

        const output = {
            message: "Animal registrado com sucesso",
            product: newPet
        }

        return output
    }
}