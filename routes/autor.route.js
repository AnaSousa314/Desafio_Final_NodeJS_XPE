import express from "express";
import AutorController from "../controllers/autor.controller.js";

const router = express.Router();

router.post("/", AutorController.createAuthor);
router.put("/", AutorController.updateAuthor);
router.delete("/:id", AutorController.deleteAuthor);

export default router;
