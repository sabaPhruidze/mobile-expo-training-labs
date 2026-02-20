const pool = require("../config/db");

const findUserByEmail = async (email) => {
  const { rows } = await pool.query(
    `SELECT id,full_name,email,password_hash 
        FROM users WHERE email = $1 
        LIMIT 1`,
    [email], // email = $1
  );
  return rows[0] || null;
};
const createUser = async ({ fullName, email, password_hash }) => {
  const { rows } = await pool.query(
    `INSERT INTO users(full_name,email,password_hash)
         VALUES ($1,$2,$3)
         RETURNING id,full_name,email,created_at`,
    [fullName, email, password_hash], //fullname $1, email $2 , passwordHash $3
  );
  return rows[0];
};
module.exports = { findUserByEmail, createUser };
