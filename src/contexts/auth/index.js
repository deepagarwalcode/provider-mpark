import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import api from "../../lib/api";

const getUserFromStorage = async () => {
  try {
    const token = await SecureStore.getItemAsync("token");
    if (token && token !== "null") {
      return token;
    }
    return null;
  } catch (e) {
    return null;
  }
};

const setUserInStorage = async (token) => {
  if (!token) {
    SecureStore.deleteItemAsync("token");
    return;
  }
  await SecureStore.setItemAsync("token", token);
};

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

export const AuthContext = ({ children }) => {
  const [token, setToken] = useState(null);
  // const [user, setUser] = (useState < IUser) | (null > null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const signup = async (input) => {
    const { token } = await api.auth.signup(input);
    setToken(token);
  };
  const login = async (input) => {
    const { token } = await api.auth.login(input);
    setToken(token);
  };
  const logout = () => {
    setToken(null);
    setUser(null);
    setUserInStorage(null);
  };
  const fetchUser = async () => {
    setIsLoading(true);
    try {
      let tok = token ?? (await getUserFromStorage());
      const user = await api.user.getMe();
      await setUserInStorage(tok);
      setUser(user);
    } catch (e) {
      await setUserInStorage(null);
      setToken(null);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };
  const handleUserDetails = async () => {
    let t = token;
    if (!t) {
      t = await getUserFromStorage();
      if (!t) {
        setUser(null);
        setIsLoading(false);
        return;
      }

      setToken(t);
    }
    await setUserInStorage(t);
    fetchUser();
  };
  useEffect(() => {
    handleUserDetails();
  }, [token]);

  return (
    <authContext.Provider
      value={{
        token,
        user,
        isLoading,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
