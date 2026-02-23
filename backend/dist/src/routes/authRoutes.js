"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = __importDefault(require("../middleware/validate"));
const authSchemas_1 = __importDefault(require("../validation/authSchemas"));
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
router.post("/register", (0, validate_1.default)(authSchemas_1.default), authController_1.register);
exports.default = router;
