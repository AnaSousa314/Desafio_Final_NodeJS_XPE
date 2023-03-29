import express from "express";
import LivroController from "../controllers/livro.controller.js";

const router = express.Router();

router.post("/", LivroController.createBook);
router.put("/", LivroController.updateBook);
router.delete("/:id", LivroController.deleteBook);

export default router;