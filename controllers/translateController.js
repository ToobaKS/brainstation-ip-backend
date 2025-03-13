import "dotenv/config";

const API_KEY = process.env.API_KEY;

export async function translateText (text, targetLanguage){
  try {
    const { GoogleGenerativeAI } = require("@google/generative-ai");

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = "Translate " + text + "into language " + targetLanguage;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    return result.response.text();
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
};
