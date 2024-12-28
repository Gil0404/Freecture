import axios from "axios";
import cors from "cors";
import express, { query } from "express";
const port = 3000;
const app = express();
require("dotenv").config();
app.use(cors());
const UNSPLASH_API_URL = "https://api.unsplash.com/search/photos";
const UNSPLASH_API_BASEURL = "https://api.unsplash.com/photos";
const UNSPLASH_ACCESS_KEY = process.env.API_KEY;

app.get("/api", async (req, res) => {
  const { query = "" } = req.query;
  const url = query.trim() !== "" ? UNSPLASH_API_URL : UNSPLASH_API_BASEURL;
  try {
    const response = await axios.get(url, {
      params: {
        client_id: UNSPLASH_ACCESS_KEY,
        query: query,
        per_page: 30,
      },
    });
    console.log("Unsplash API Response:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
    res.status(500).json({ error: "Failed to fetch images from Unsplash" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
