import { Request, Response } from "express"
import { clients } from "../database/database"

const TABLE_NAME = clients

export class clientController {
    public getClients = async (req: Request, res: Response) => {
        try {
            res.status(200).send(TABLE_NAME)
        } catch (error) {
            throw new error('ERRO!')
        }
    }
}