import express from 'express'
import { clientController } from '../controller/usercontroller'

export const clientRouter = express.Router()
const clientcontroller = new clientController()

clientRouter.get('', clientcontroller.getClients)