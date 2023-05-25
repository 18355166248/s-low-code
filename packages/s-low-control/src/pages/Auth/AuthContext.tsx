import { signIn, signOut } from "@/services/login";
import { LOGIN_DTO } from "@/services/types/login";
import {
  setAuthStorage,
  removeAuthStorage,
  getUserStorage,
} from "@/utils/auth";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: any;
  signin: (user: LOGIN_DTO["params"]) => Promise<LOGIN_DTO["Response"]>;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

function useAuth() {
  return useContext(AuthContext);
}
// 是否已登录
const isLogin = () => getUserStorage();

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<LOGIN_DTO["Response"]["user"]>(null!);
  const loadingRef = useRef(false);
  const navigate = useNavigate();

  const notLoginPage = window.location.pathname !== "/login";

  useEffect(() => {
    const storageUser = getUserStorage();
    storageUser && setUser(storageUser);
    if (!storageUser && !loadingRef.current && notLoginPage) {
      signout();
    }
  }, []);

  let signin = (user: LOGIN_DTO["params"]) => {
    return signIn(user).then((res) => {
      setAuthStorage(res);
      setUser(res.user);
      return res;
    });
  };

  let signout = () => {
    loadingRef.current = true;
    return signOut({ userName: user?.userName })
      .then(() => {
        setUser(null!);
        removeAuthStorage();
        if (notLoginPage) {
          navigate("/login");
        }
      })
      .finally(() => {
        loadingRef.current = false;
      });
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthProvider, useAuth, isLogin };
