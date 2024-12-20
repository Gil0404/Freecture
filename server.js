import axios from "axios";
import cors from "cors";
import express from "express";
const port = 3000;
const app = express();

app.use(cors());
const UNSPLASH_API_URL = "https://api.unsplash.com/photos";
const UNSPLASH_ACCESS_KEY = "";

app.get("/api", async (req, res) => {
  try {
    const response = await axios.get(UNSPLASH_API_URL, {
      params: {
        client_id: UNSPLASH_ACCESS_KEY,
        per_page: 30,
      },
    });
    res.json(response.data);
  } catch {
    console.error("Error fetching images from Unsplash:", error);
    res.status(500).json({ error: "Failed to fetch images from Unsplash" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
