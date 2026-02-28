const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const schoolKnowledgeBase = {
  name: "Saquama Digital Academy",
  stats: {
    students: "1,500 active students",
    teachers: "120 certified educators",
    classes: "Grade 9 to Grade 12",
  },
  admission: "Registration is open every September and January. The fee is 1,000 ETB for new students.",
  contact: {
    phone: "+251-911-93820802",
    email: "support@saquamaacademy.edu",
    address: "Bole, Addis Ababa, Ethiopia"
  }
};

const developerInfo = {
  name: "Neftalem",
  role: "Lead Developer",
  contact: {
    github: "https://github.com/Neftalem-Dagnachew",
    linkedin: "https://www.linkedin.com/in/neftalem-dagnachew-226307365"
  }
};

exports.askAI = async (req, res) => {
  try {
    const { prompt } = req.body;

    const fullPrompt = `
      You are the official AI Student Support Assistant for Saquama Digital Academy.

      Be friendly, professional, and helpful.

      You can answer questions about:
      - Saquama Digital Academy (school info)
      - The developer of this platform

      If a question is unrelated to these topics, say:
      "I can only assist with questions about Saquama Digital Academy or the developer."

      School Information:
      ${JSON.stringify(schoolKnowledgeBase, null, 2)}

      Developer Information:
      ${JSON.stringify(developerInfo, null, 2)}

      User Question:
      ${prompt}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: fullPrompt,
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