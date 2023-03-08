import express from 'express'
import "reflect-metadata"
import { DataSource } from 'typeorm'
import { Pet } from './model/Pet'
import { clientRouter } from './router/clientRouter'
import { petRouter } from './router/petRouter'

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "db_pethouse",
    entities: [Pet],
    synchronize: true,
    logging: false
})

AppDataSource.initialize()
    .then(() => {
        
    })
    .catch((error) => console.log(error))

const app = express()

app.use(express.json())

app.listen(3003, ()=>{
    console.log("Servidor na porta 3003")
})

app.use("/pets", petRouter)
app.use("/clients", clientRouter)