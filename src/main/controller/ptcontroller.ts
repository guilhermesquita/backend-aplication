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

    public getPetsById = async (req: Request, res: Response) => {

        try {

            const id = req.params.id;

            const getpets = new ptBusiness()
            const result = await getpets.getPetsById(id)

            res.send(result)

        } catch (error) {

            if(req.statusCode === 200){
                res.status(500)
            }

            if(error instanceof Error){
                res.send(error.message)
            }else{
                res.send("Error inesperado!")
            }

        }
    }

    public createPets = async (req: Request, res: Response) => {

        try {

            const input = {
                id: req.body.id,
                name: req.body.name,
                price: req.body.price,
                size: req.body.size
            }

            const createpets = new ptBusiness()

            const output = await createpets.createPet(input)

            res.send(output)

        } catch (error) {
            if(req.statusCode === 200){
                res.status(500)
            }

            if(error instanceof Error){
                res.send(error.message)
            }else{
                res.send("Error inesperado!")
            }
        }
    }
}