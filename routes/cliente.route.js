import express from "express";
import ClienteController from "../controllers/cliente.controller.js";

const router = express.Router();

router.post("/", ClienteController.createClient);
router.put("/", ClienteController.updateClient);

export default router;