import { Request, Response } from "express"
import { pets } from "../database/database"
import { db } from "../database/knex"

const TABLE_NAME = "pets"

export class ptController {
    public getPets = async (req: Request, res: Response) => {

        try {

            const result = await db('pets')

            res.send(result)

        } catch (error) {
            throw new error ('ERRO!')
        }
    }
}