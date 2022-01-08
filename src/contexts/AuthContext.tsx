import { createContext, ReactNode, useContext, useState } from 'react';

type TProps = {
  children: ReactNode;
};

type AuthStateType = {
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthStateType>({
  username: null,
  login: () => undefined,
  logout: () => undefined,
});

const AuthState = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'));

  const login = (user: string) => {
    localStorage.setItem('username', user);
    setUsername(user);
  };

  const logout = () => {
    localStorage.removeItem('username');
    setUsername(null);
  };
  return {
    username,
    login,
    logout,
  };
};

const AuthContextProvider = ({ children }: TProps) => (
  <AuthContext.Provider value={AuthState()}>{children}</AuthContext.Provider>
);

const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };
