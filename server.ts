import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const getGenAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

// AI Fitness Coach & Gym Advisor Endpoint
app.post("/api/ai-coach", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const ai = getGenAI();
    if (!ai) {
      // Fallback response if API key is not yet set up
      return res.json({
        reply: `Hello! I am S.K. FITNESS AI Coach. To get personalized AI fitness advice, please ensure GEMINI_API_KEY is configured. Meanwhile, S.K.FITNESS Gym offers HIIT, Crossfit, Aerobics, and Personal Training daily from 6 AM to 10 PM at Star Plus Mall, Nashik Road! You can also call us directly at 098232 19007.`
      });
    }

    const systemInstruction = `You are "S.K. AI Fitness Coach", the virtual assistant for S.K.FITNESS Gym located at 205A, Star Plus Mall, MG Road, Opp NMC Office, Near Muktidham Mandir, Nashik Road, Nashik, Maharashtra.
You are energetic, encouraging, knowledgeable, and polite.
Key S.K.FITNESS Gym details:
- Rating: 4.9 stars with 214 Google reviews.
- Vibe: Clean, friendly, no-judgement atmosphere for beginners to pros.
- Operating Hours: Mon-Sat 6 AM to 10 PM, Sun 7 AM to 1 PM.
- Popular peak hours: Morning (7-9 AM) and Evening (6-8 PM). Quietest hours: 11 AM - 4 PM.
- Contact: 098232 19007.
- Services: HIIT, Aerobics, CrossFit, Private Lessons, Personal Training, Youth Classes, Weight Training, Nutrition Consulting, Indoor Cycling.
- Provide practical workout guidance, form tips, and diet advice suited for Indian/Maharashtrian diets (e.g. eggs, sprouts, dal, paneer, chicken, bhakri, oats, whey).
Keep answers structured, concise, friendly, and under 250 words. Always invite them to book a free trial at S.K.FITNESS Gym!`;

    const contents = [];
    if (history && Array.isArray(history)) {
      for (const item of history) {
        contents.push({
          role: item.role === "user" ? "user" : "model",
          parts: [{ text: item.text }]
        });
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const reply = response.text || "I'm excited to help you on your fitness journey at S.K.FITNESS Gym! How else can I assist you today?";
    res.json({ reply });
  } catch (err: any) {
    console.error("AI Coach Error:", err);
    res.status(500).json({
      reply: "S.K. AI Coach is taking a short rest breath! You can reach Head Coach S.K. Sir directly at 098232 19007 or schedule a free trial session on this website."
    });
  }
});

async function startServer() {
  // Serve API routes first
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", gym: "S.K.FITNESS Gym", location: "Nashik Road" });
  });

  // Vite middleware for development vs production static serve
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`S.K.FITNESS Gym server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
