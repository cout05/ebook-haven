import express from "express";
import User from "../models/userModels.js";

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({
      firstname,
      lastname,
      username,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login route
router.post("/login", async (request, response) => {
  try {
    const { username, password } = request.body;

    if (!username || !password) {
      return response.status(400).send({
        message: "Username and password are required",
      });
    }

    // Check if the user exists in the database
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      // Check if the password is correct
      if (existingUser.password === password) {
        return response.status(200).send({
          message: "Login successful",
          userDetails: existingUser,
        });
      } else {
        return response.status(200).send({
          message: "Incorrect password",
        });
      }
    } else {
      return response.status(200).send({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
