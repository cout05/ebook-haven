import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  publishYear: { type: Number, required: true },
  bookCover: {
    type: String,
    default: null,
  },
});

export const Book = mongoose.model("Books", bookSchema);
