import express from "express";
import { Library } from "../models/libraryModels.js";

const router = express.Router();

router.post("/add", async (request, response) => {
  try {
    if (!request.body.userId || !request.body.bookId) {
      return response.status(400).send({
        message: "Send all required fields: userId, bookId",
      });
    }
    const savedBook = {
      userId: request.body.userId,
      bookId: request.body.bookId,
    };

    const saved = await Library.create(savedBook);

    return response.status(200).send(saved);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.post("/get", async (request, response) => {
  try {
    if (!request.body.userId) {
      return response.status(400).send({
        message: "Send all required fields: userId",
      });
    }
    const saved = await Library.find({});
    const books = saved.filter((e) => e.userId == request.body.userId);
    return response.status(200).send({ books });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
