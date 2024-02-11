import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  userId: { type: Number, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishYear: { type: Number, required: true },
});

export const Book = mongoose.model("Books", bookSchema);
