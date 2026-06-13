const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./config/db");

const profileRoutes = require("./routes/ProfileRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("GitHub Profile Analyzer API is Running");
});

app.use("/api", profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});