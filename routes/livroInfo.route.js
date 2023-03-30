import express from "express";

import LivroInfoController from "../controllers/livroInfo.controller.js";

const router = express.Router();


router.post("/", LivroInfoController.createBookInfo);
router.put("/", LivroInfoController.updateBookInfo);
router.post("/avaliacao/:id", LivroInfoController.createBookReview);
router.delete("/:id/avaliacao/:index", LivroInfoController.deleteBookReview);

router.delete("/:id", LivroInfoController.deleteBookInfo);


export default router;