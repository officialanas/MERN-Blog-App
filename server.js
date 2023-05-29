const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//env config
dotenv.config();

//rest objecct
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//mongodb connection
connectDB();

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Node Server",
  });
});

// Port
//const PORT = process.env.PORT || 8080;
const PORT = 8080;

//listen

app.listen(PORT, () => {
  console.log(`Server Running on mode port no ${PORT}`.bgCyan.white);
});
