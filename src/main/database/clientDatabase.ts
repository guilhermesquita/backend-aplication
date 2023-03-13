import { IClient } from "../types/clients"
import { BaseDatabase } from "./BaseDatabase"

export class clientDatabase extends BaseDatabase{

    public static TABLE_USERS = "clients"

    public async getClients(){
        const clientsDb:IClient[] = await BaseDatabase.connection(clientDatabase.TABLE_USERS)

        return clientsDb;
    }
    
    public async getClientsById(id: string){
        const clientsDb:IClient[] = await BaseDatabase.connection(clientDatabase.TABLE_USERS).where({id: id})

        return clientsDb
    }

    public async getClientsByEmail(email: string){
        const clientsDb:IClient[] = await BaseDatabase.connection(clientDatabase.TABLE_USERS).where({email: email})

        return clientsDb
    }

    public async createClients(newClient:IClient){
        const clientsDb:IClient[] = await BaseDatabase.connection(clientDatabase.TABLE_USERS).insert(newClient)

        return clientsDb;
    }

}