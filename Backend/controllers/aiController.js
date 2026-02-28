const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

exports.askAI = async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({ answer: response.text });

  } catch (error) {
    console.error("GEMINI ERROR:", error.status, error.message);

    if (error.status === 429) {
      return res.status(429).json({
        error: "Daily AI limit reached. Try again tomorrow."
      });
    }

    if (error.status === 403) {
      return res.status(403).json({
        error: "API key issue. Check your configuration."
      });
    }

    return res.status(500).json({
      error: "Something went wrong with AI request."
    });
  }
};