import {Router} from "express";
import { getClients, getClient, createClients, updateClients, deleteClients } from "../controllers/clients.controller.js";

const router = Router();

router.get("/clients", getClients)

router.get("/clients/:id",  getClient)

router.delete("/clients/:id", deleteClients)

router.post("/clients", createClients)

router.patch("/clients/:id", updateClients)


export default router