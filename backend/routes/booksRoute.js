import multer from "multer";
import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { Book } from "../models/bookModels.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get the directory name of the current module file
const __dirname = dirname(fileURLToPath(import.meta.url));

const router = express.Router();

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../frontend/src/uploads"));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, uuidv4() + ext);
  },
});

const upload = multer({ storage });

// Routes for Saving a new Book
router.post("/", upload.single("bookCover"), async (request, response) => {
  try {
    const { userId, title, author, publishYear } = request.body;

    if (!userId || !title || !author || !publishYear) {
      return response.status(400).send({
        message: "Send all required fields: userId, title, author, publishYear",
      });
    }

    const newBook = {
      userId,
      title,
      author,
      publishYear,
      bookCover: request.file ? request.file.filename : null,
    };

    const book = await Book.create(newBook);

    return response.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for getting all books
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).send({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for getting one book from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    return response.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route to update a book
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }
    return response.status(200).send({
      message: "Book Upated!!!",
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for deleting a Book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }
    return response.status(200).send({
      message: "Book Deleted Succesfully",
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
