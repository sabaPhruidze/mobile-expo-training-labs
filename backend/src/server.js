require("dotenv").config();
const express = require("express");
const app = express();
const pool = require("./config/db");
const port = process.env.PORT;

app.get("/healt", async (req, res) => {
  try {
    const result = await pool.query("SELECT 1 as ok");
    res.json({ status: "ok", db: result.rows[0] });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Move on this link : http://localhost:${port}/healt`);
});
