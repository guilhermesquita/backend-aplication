import { Request, Response } from "express"
import { pets } from "../database/database"

const TABLE_NAME = pets

export class ptController {
    public getPets = async (req: Request, res: Response) => {
        try {
            res.status(200).send(TABLE_NAME)
        } catch (error) {
            throw new error('ERRO!')
        }
    }
}