import express from "express";
import ClienteController from "../controllers/cliente.controller.js";

const router = express.Router();

router.post("/", ClienteController.createClient);
router.put("/", ClienteController.updateClient);
router.get("/", ClienteController.getClients);
router.get("/:id", ClienteController.getClient);
router.delete("/:id", ClienteController.deleteClient);

export default router;