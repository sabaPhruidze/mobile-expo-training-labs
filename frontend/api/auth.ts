import api from "./api";
import type { RegisterSchema } from "../features/auth/schema";
// backend response which will be token
export type AuthResponse = {
  token: string;
};
export const registerRequest = async (payload: RegisterSchema) => {
  // post method
  const res = await api.post<AuthResponse>("./auth/register", payload);
  return res.data; //returns {token}
};
