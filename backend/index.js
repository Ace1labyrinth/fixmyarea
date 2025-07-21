require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({ limit:'10mb' }));
app.use(express.urlencoded({ extended:true, limit:'10mb' }));

const IssueRoutes = require("./routes/IssueRoutes");

console.log("✅ IssueRoutes loaded");


app.get("/", (req, res) => {
  res.send("FixMyArea backend is live, check it out");
});

app.use('/api/issues', IssueRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


