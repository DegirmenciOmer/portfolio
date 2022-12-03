import React, {
  useContext,
  useState,
  createContext,
  FC,
  PropsWithChildren,
  SetStateAction,
  Dispatch,
  ReactNode,
} from "react";

interface TContext {
  darkMode: boolean | Dispatch<SetStateAction<boolean>>;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  locale: string | Dispatch<SetStateAction<string>>;
  setLocale: Dispatch<SetStateAction<string>>;
  children: Element & ReactNode;
}

export const AppContext = createContext<Partial<TContext>>({});

export const useAppContext = () => useContext(AppContext);

export const AppProvider: FC<PropsWithChildren<TContext>> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};
