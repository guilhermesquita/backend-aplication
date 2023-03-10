import express from "express";
import { ptController } from "../controller/ptcontroller";

export const petRouter = express.Router()
const ptcontroller = new ptController()

petRouter.get("/", ptcontroller.getPets)
petRouter.post('/', ptcontroller.createPets)