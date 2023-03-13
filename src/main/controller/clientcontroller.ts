// import { Request, Response } from "express"
// import { clientBusiness } from "../business/clientBusiness"


// export class clientController {
//     public getClients = async (req: Request, res: Response) => {
//         try {

//             const client = new clientBusiness()
//             const result = await client.getClients()

//             res.status(200).send(result)
//         } catch (error) {
//             throw new error('ERRO!')
//         }
//     }
// }