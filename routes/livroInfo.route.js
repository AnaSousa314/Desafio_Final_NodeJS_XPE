import express from "express";

import LivroInfoController from "../controllers/livroInfo.controller.js";

const router = express.Router();


router.post("/", LivroInfoController.createBookInfo);
router.put("/", LivroInfoController.updateBookInfo);
router.delete("/:id", LivroInfoController.deleteBookInfo);


export default router;