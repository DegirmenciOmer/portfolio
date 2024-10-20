import React, {
  useContext,
  useState,
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
} from 'react'

// Define the context shape
interface TContext {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  locale: string
  setLocale: React.Dispatch<React.SetStateAction<string>>
}

// Initialize the context with an empty object but make it non-partial (with default values)
export const AppContext = createContext<TContext>({
  darkMode: false,
  setDarkMode: () => {},
  locale: 'en',
  setLocale: () => {},
})

export const useAppContext = () => useContext(AppContext)

// AppProvider with corrected typing for children (ReactNode)
export const AppProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)
  const [locale, setLocale] = useState('en')

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, locale, setLocale }}>
      {children}
    </AppContext.Provider>
  )
}
