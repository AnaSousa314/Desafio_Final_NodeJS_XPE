import express from "express";
import AutorController from "../controllers/autor.controller.js";

const router = express.Router();

router.post("/", AutorController.createAuthor);
router.put("/", AutorController.updateAuthor);
router.get("/", AutorController.getAuthors);
router.get("/:id", AutorController.getAuthor);
router.delete("/:id", AutorController.deleteAuthor);

export default router;
