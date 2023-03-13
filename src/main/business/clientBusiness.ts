import { clientDatabase } from "../database/clientDatabase"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { IClient } from "../types/clients"

export class clientBusiness {

    public async getClients() {
        const client = new clientDatabase()
        const result = await client.getClients()

        return result
    }

    public async getClientsById(id: string) {
        const client = new clientDatabase()
        const result = await client.getClientsById(id)

        if (result.length === 0) {
            throw new NotFoundError('Id não encontrado!')
        }

        return result
    }

    public async creatClient(id: string, name: string, email: string, password: string, age:number){
        
        const newClient = {
            id: id,
            name: name,
            email: email,
            password: password,
            age: age
        }

        const client = new clientDatabase()
        const clientIdExists = await client.getClientsById(id)
        const clientEmailExists = await client.getClientsByEmail(email)

        if(clientIdExists.length > 0){
            throw new BadRequestError('ID já em uso!')
        }

        if(clientEmailExists.length > 0){
            throw new BadRequestError('Email já cadastrado na plataforma!')
        }

        const result = await client.createClients(newClient)

        return result
    }

}