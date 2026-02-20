"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.findUserByEmail = void 0;
const db_1 = __importDefault(require("../config/db"));
const findUserByEmail = async (email) => {
    const { rows } = await db_1.default.query(`SELECT 
    id,
    full_name,
    email,
    password_hash 
    FROM users WHERE email = $1 
    LIMIT 1`, [email]);
    return rows[0] || null;
};
exports.findUserByEmail = findUserByEmail;
const createUser = async (params) => {
    const { fullName, email, password_hash } = params;
    const { rows } = await db_1.default.query(`INSERT INTO users(full_name,email,password_hash)
         VALUES ($1,$2,$3)
         RETURNING id,full_name,email,created_at`, [fullName, email, password_hash]);
    return rows[0];
};
exports.createUser = createUser;
