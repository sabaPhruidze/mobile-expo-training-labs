import pool from "../config/db";

export type DbUserAuth = {
  id: number;
  full_name: string;
  email: string;
  password_hash: string;
};
export type DbUserPublic = {
  id: number;
  full_name: string;
  email: string;
  created_at?: string;
};

export const findUserByEmail = async (
  email: string,
): Promise<DbUserAuth | null> => {
  const { rows } = await pool.query<DbUserAuth>(
    `SELECT 
    id,
    full_name,
    email,
    password_hash 
    FROM users WHERE email = $1 
    LIMIT 1`,
    [email], // email = $1
  );
  return rows[0] || null;
};
export const createUser = async (params: {
  fullName: string;
  email: string;
  password_hash: string;
}): Promise<DbUserPublic> => {
  const { fullName, email, password_hash } = params;
  const { rows } = await pool.query<DbUserPublic>(
    `INSERT INTO users(full_name,email,password_hash)
         VALUES ($1,$2,$3)
         RETURNING id,full_name,email,created_at`,
    [fullName, email, password_hash], //fullname $1, email $2 , passwordHash $3
  );
  return rows[0];
};
export const findUserById = async (
  id: number,
): Promise<DbUserPublic | null> => {
  const { rows } = await pool.query<DbUserPublic>(
    `SELECT id, full_name, email
    FROM users
    WHERE id =$1
    LIMIT 1
    `,
    [id],
  );
  return rows[0] ?? null;
};
