import express from "express";
import LivroController from "../controllers/livro.controller.js";

const router = express.Router();

router.post("/", LivroController.createBook);
router.put("/", LivroController.updateBook);
router.get("/", LivroController.getBooks);
router.delete("/:id", LivroController.deleteBook);
router.get("/:id", LivroController.getBook);

export default router;