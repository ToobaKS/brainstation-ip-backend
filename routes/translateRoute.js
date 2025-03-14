import express from "express";
import "dotenv/config";
import { translateText } from "../controllers/translateController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const text = req.query.text;
    const targetLanguage = req.query.targetLanguage;

    console.log("Text:", text);
    console.log("Target Language:", targetLanguage);

    if (!text || !targetLanguage) {
      return res
        .status(400)
        .json({ error: "Missing required parameters: text or targetLanguage" });
    }

    const translation = await translateText(text, targetLanguage);

    res.json({ translation });
  } catch (error) {
    console.error("Translation error:", error);
    res.status(500).json({ error: "Failed to translate text" });
  }
});

export default router;
