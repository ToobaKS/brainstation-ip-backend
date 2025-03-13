import "dotenv/config";
import {GoogleGenerativeAI} from "@google/generative-ai";

const API_KEY = process.env.API_KEY;

export async function translateText (text, targetLanguage){
  try {
 

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.0-flash",
        systemInstruction: "Speak to me in " + targetLanguage + "language",
    });

    const prompt = "Give me only the translation of the" + text + "into language " + targetLanguage;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    return result.response.text();
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
};
