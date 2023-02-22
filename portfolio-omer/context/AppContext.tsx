import React, {
  useContext,
  useState,
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
} from 'react'

interface TContext {
  darkMode: boolean
  setDarkMode: any
  locale: string
  setLocale: any
  children: Element & ReactNode
}
export const AppContext = createContext<Partial<TContext>>({})

export const useAppContext = () => useContext(AppContext)

export const AppProvider: FC<PropsWithChildren<TContext>> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  const [locale, setLocale] = useState('en')

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, locale, setLocale }}>
      {children}
    </AppContext.Provider>
  )
}
