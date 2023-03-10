import { Request, Response } from "express"
import { ptBusiness } from "../business/ptBusiness"

export class ptController {
    public getPets = async (req: Request, res: Response) => {

        try {

            const getpets = new ptBusiness()
            const result = await getpets.getPets()

            res.send(result)

        } catch (error) {
            throw new error('ERRO!')
        }
    }

    public createPets = async (req: Request, res: Response) => {

        try {

            const {id, name, price, size} = req.body

            const createpets = new ptBusiness()

            await createpets.createPet(id, name, price, size)

            res.send('Animal Cadastrado!')

        } catch (error) {
            throw new error('ERRO!')
        }
    }
}