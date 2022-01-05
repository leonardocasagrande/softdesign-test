import { createContext, ReactNode, useState } from 'react';

type TProps = {
  children: ReactNode;
};

type AppStateType = {
  userData: any;
  setUserData: (data: any) => void;
};

const AppContext = createContext<AppStateType>({
  userData: null,
  setUserData: () => undefined,
});

const AppState = () => {
  const [userData, setUserData] = useState<any>(null);
  const appState = { userData, setUserData };
  return appState;
};

const AppContextProvider = ({ children }: TProps) => (
  <AppContext.Provider value={AppState()}>{children}</AppContext.Provider>
);

export { AppContextProvider, AppContext };
