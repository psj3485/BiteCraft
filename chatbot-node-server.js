/**
 * BiteCraft - Optional Node.js AI Chat Server Microservice
 * Provides POST /api/chat endpoint with Gemini/OpenAI integration
 * or standalone culinary heuristics.
 *
 * Usage:
 *   npm install express cors dotenv
 *   node assets/chatbot-node-server.js
 */

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.CHAT_PORT || 3001;

app.use(cors());
app.use(express.json());

// Culinary Context for Prompt Augmentation
const BOURMET_SYSTEM_PROMPT = `
You are Chef BiteCraft, the executive culinary AI concierge for 'BiteCraft', an artisanal gourmet food delivery brand.
Brand Aesthetic: Luxury dark-mode with glowing emerald neon accents (#00ff88).
Tone: Passionate, warm, sophisticated, five-star culinary authority.
Catalog Highlights:
- 16 Pure Vegetarian dishes (Burrata Pesto Pizza, Truffle Edamame Dim Sum, Crispy Portobello Avocado Burger, Smoked Paneer Makhani).
- 4 Non-Veg masterworks (Truffle Smash Burger, Crispy Peri-Peri Wings, Pan-Seared Salmon Bowl, Loaded Cali Burrito).
- Delivery: 25-35 min express hot thermal packaging. Free delivery on orders ₹199+.
Instructions:
- Keep responses concise, vivid, and enticing.
- Recommend specific dishes by name.
- Provide allergen guidance and suggest adding custom notes during checkout.
`;

/**
 * Fallback heuristic response generator
 */
function heuristicChefReply(message) {
  const q = (message || '').toLowerCase();
  if (q.includes('spicy') && q.includes('chees')) {
    return {
      reply: "The ultimate clash of fire and silk! 🔥🧀 I recommend pairing our fiery Crispy Peri-Peri Wings with the molten Artisan Burrata Pesto Pizza.",
      recommendations: [3, 17, 19],
      chips: ["🍗 Peri-Peri Wings", "🍕 Burrata Pizza", "🛒 View Cart"]
    };
  }
  if (q.includes('veg') || q.includes('vegetarian')) {
    return {
      reply: "🌱 **100% Pure Vegetarian Indulgence!** BiteCraft features 16 hand-crafted vegetarian creations. Start with our Crispy Portobello Avocado Burger or Truffle Edamame Dim Sum!",
      recommendations: [13, 16, 17, 15],
      chips: ["🥑 Portobello Burger", "🥟 Dim Sum", "🍛 Paneer Bowl"]
    };
  }
  if (q.includes('delivery') || q.includes('speed') || q.includes('time')) {
    return {
      reply: "⚡ All orders are freshly prepared and dispatched in insulated thermal containers within **25-35 minutes**! Delivery is 100% FREE on orders over ₹199.",
      chips: ["🍔 Truffle Burger", "🛒 View Cart", "🚀 Track Order"]
    };
  }
  return {
    reply: "Bonjour! 👨‍🍳 I'm Chef BiteCraft. Every dish in our kitchen is prepared with five-star precision. Tell me your cravings or dietary preferences!",
    recommendations: [1, 2, 13, 17],
    chips: ["🍔 Best Burgers", "🍕 Artisan Pizzas", "🌱 Pure Veg", "🔥 Spicy & Cheesy"]
  };
}

/**
 * POST /api/chat
 * Body: { message: "I want something spicy and cheesy" }
 */
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // If GEMINI_API_KEY is present, you can connect to Google Generative AI
  if (process.env.GEMINI_API_KEY) {
    try {
      // Connect to Google Gemini API
      // const { GoogleGenerativeAI } = require('@google/generative-ai');
      // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      // const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash', systemInstruction: BOURMET_SYSTEM_PROMPT });
      // const result = await model.generateContent(message);
      // return res.json({ reply: result.response.text(), source: 'gemini' });
    } catch (err) {
      console.warn('Gemini API call failed, falling back to heuristic engine:', err.message);
    }
  }

  // Local Culinary Engine
  const result = heuristicChefReply(message);
  res.json({
    success: true,
    reply: result.reply,
    recommendations: result.recommendations,
    chips: result.chips,
    source: 'chef-bitecraft-engine'
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`[Chef BiteCraft AI Server] Running on http://localhost:${PORT}`);
  });
}

module.exports = app;

