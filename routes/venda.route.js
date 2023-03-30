import express from "express";
import VendaController from "../controllers/venda.controller.js";

const router = express.Router();

router.post("/", VendaController.createSale);
router.get("/", VendaController.getSales);
router.get("/:id", VendaController.getSale);

export default router;