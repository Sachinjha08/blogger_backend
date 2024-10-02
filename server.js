const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/connectDB");
connectDB();
const morgan = require("morgan");
const cors = require("cors");
const userRoute = require("./routes/userRoutes");
const blogRoute = require("./routes/blogRoutes");
const cookie = require("cookie-parser");

const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: "https://blogger-due9.onrender.com",
  })
);

app.use(express.json());
app.use(cookie());

const PORT = process.env.PORT || 7000;

// app.use("/", (req, res) => {
//   res.status(201).send({
//     message: `App is running on ${PORT}`,
//   });
// });
app.use("/api/v1/user", userRoute);
app.use("/api/v1/blog", blogRoute);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
