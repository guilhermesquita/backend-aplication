import { clientDatabase } from "../database/clientDatabase"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { Client } from "../model/Client"
import { IClient } from "../types/clients"

export class clientBusiness {

    public async getClients() {
        const client = new clientDatabase()
        const clientDb = await client.getClients()

        const clients: Client[] = clientDb.map((clientDb) => new Client(
            clientDb.id,
            clientDb.name,
            clientDb.email,
            clientDb.password,
            clientDb.age
        ))

        return clients;
    }

    public async getClientsById(id: string) {
        const client = new clientDatabase()
        const result = await client.getClientsById(id)

        if (result.length === 0) {
            throw new NotFoundError('Id não encontrado!')
        }

        return result
    }

    public async createClient(input: any) {

        const { id, name, email, password, age } = input

        const clientsDatabase = new clientDatabase()
        const clientIdExists = await clientsDatabase.getClientsById(id)
        const clientEmailExists = await clientsDatabase.getClientsById(email)

        if(clientIdExists.length > 0){
            throw new BadRequestError('ID já em uso!')
        }

        if(clientEmailExists.length > 0){
            throw new BadRequestError('Email já cadastrado na plataforma!')
        }

        if(age < 18){
            throw new BadRequestError('Para se tornar cliente, sua idade deve ser no mínimo de 18 anos!')
        }

        const newClient = new Client(
            id,
            name,
            email,
            password,
            age
        )

        const newClientDB: IClient = {
            id: newClient.getId(),
            name: newClient.getName(),
            email: newClient.getEmail(),
            password: newClient.getPassword(),
            age: newClient.getAge()
        }

        await clientsDatabase.createClients(newClientDB);

        const output = {
            message: "Produto registrado com sucesso",
            product: newClient
        }

        return output
    }
}