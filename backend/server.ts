import express from "express";
import axios from "axios";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Fetch top sources
app.get("/api/sources", async (req, res) => {
  try {
    const response = await axios.get("https://newsapi.org/v2/sources", {
      params: {
        apiKey: process.env.NEWS_API_KEY,
        language: "en",
      },
    });

    const top20 = response.data.sources.slice(0, 20);
    res.json(top20);
  } catch (error: any) {
    console.error("Error fetching sources:", error.message);
    res.status(500).json({ error: "Failed to fetch sources" });
  }
});

// Fetch top headlines or everything
app.get("/api/news", async (req, res) => {
  try {
    const { q, category, sources, pageSize = 20, everything } = req.query;

    const url = everything ? "https://newsapi.org/v2/everything" : "https://newsapi.org/v2/top-headlines";

    const response = await axios.get(url, {
      params: {
        apiKey: process.env.NEWS_API_KEY,
        language: "en",
        pageSize,
        q,
        category,
        sources,
      },
    });

    res.json(response.data);
  } catch (error: any) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
