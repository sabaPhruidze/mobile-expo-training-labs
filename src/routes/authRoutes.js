const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const { registerSchema } = require("../validation/authSchemas");
const { register } = require("../controllers/authController");

router.post("/register", validate(registerSchema), register);

module.exports = router;
