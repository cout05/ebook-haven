import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello There");
});

app.use("/books", booksRoute);
app.use("/user", userRoute);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("app connected to the database");
    app.listen(PORT, () => {
      console.log(`App is Listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
