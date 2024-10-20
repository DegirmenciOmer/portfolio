import React, { FC, PropsWithChildren } from 'react'
import { useAppContext } from '../context/AppContext'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { darkMode, setDarkMode } = useAppContext()

  return (
    <div className={`bg-slate-${darkMode ? '800' : '200'}`}>
      <div className='container mx-auto'>{children} </div>
    </div>
  )
}

export default Layout
