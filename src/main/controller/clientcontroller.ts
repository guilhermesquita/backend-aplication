import { Request, Response } from "express"
import { clientBusiness } from "../business/clientBusiness"


export class clientController {
    public getClients = async (req: Request, res: Response) => {
        try {

            const client = new clientBusiness()
            const result = await client.getClients()

            res.status(200).send(result)
        } catch (error) {
            throw new error('ERRO!')
        }
    }

    public getClientsById = async (req: Request, res: Response) => {
        try {

            const id = req.params.id

            const client = new clientBusiness()
            const result = await client.getClientsById(id)

            res.status(200).send(result)
        } catch (error) {
            if (req.statusCode === 200) {
                res.status(500)
            }

            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Error inesperado!")
            }
        }
    }

    public createClients = async (req: Request, res: Response) => {
        try {

            const input = {
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                age: req.body.age
            }

            const client = new clientBusiness()
            const result = await client.createClient(input)

            res.status(201).send(result)
        } catch (error) {
            if (req.statusCode === 200) {
                res.status(500)
            }

            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Error inesperado!")
            }
        }
    }

}