import express from "express";
import "dotenv/config";
import { translateText } from "../controllers/translateController.js";

const router = express.Router();

router.get("/", (req, res) => {
	const {text, targetLanguage} = req.body;
    res.send(translateText(text, targetLanguage));
});

export default router;