import expres from 'express'
import "reflect-metadata"
import { clientRouter } from './router/clientRouter'
import { petRouter } from './router/petRouter'

const app = express()

app.use(express.json())

app.listen(3003, ()=>{
    console.log("Servidor na porta 3003")
})

app.use("/pets", petRouter)
app.use("/clients", clientRouter)