import { Router } from "express";
import validate from "../middleware/validate";
import registerSchema from "../validation/authSchemas";
import { register } from "../controllers/authController";

const router = Router();
router.post("/register", validate(registerSchema), register);

export default router;
