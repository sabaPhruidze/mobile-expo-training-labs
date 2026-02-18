const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser } = require("../models/userModel");

const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.validated; // added by this in validate.js
    const existing = await findUserByEmail(email);
    if (existing)
      return res.status(409).json({ message: "Email already exist" });
    const password_hash = await bcrypt.hash(password, 10); //writing salt is not neccessary, this is a shorter way
    const user = await createUser({ fullName, email, password_hash });
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.status(201).json({ message: "Registered", user, token });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports = { register };
