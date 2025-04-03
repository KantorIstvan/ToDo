const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/todoRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
