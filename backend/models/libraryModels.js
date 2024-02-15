import mongoose from "mongoose";

const librarySchema = mongoose.Schema({
  userId: { type: String, required: true },
  bookId: { type: String, required: true },
});

export const Library = mongoose.model("Libarary", librarySchema);
