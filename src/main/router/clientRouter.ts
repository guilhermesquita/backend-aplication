import express from 'express'
import { clientController } from '../controller/clientcontroller'

export const clientRouter = express.Router()
const clientcontroller = new clientController()

clientRouter.get('', clientcontroller.getClients)