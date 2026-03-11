import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "userToken";

export const saveToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  } catch (error) {
    console.log("Token save error:", error);
  }
};
export const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    return token;
  } catch (error) {
    console.log("token read error", error);
    return null;
  }
};
export const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch (error) {
    console.log("token remove error", error);
  }
};
