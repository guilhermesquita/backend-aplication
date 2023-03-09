import express from 'express'
import cors from 'cors'
import { clientRouter } from './router/clientRouter'
import { petRouter } from './router/petRouter'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
    console.log("Servidor na porta 3003")
})

app.use("/pets", petRouter)
app.use("/clients", clientRouter)