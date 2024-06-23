import Link from 'next/link'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useAppContext } from '../context/AppContext'
import { translationHelper } from '../data/translationHelper'
interface THeaderProps {
  switchText: string
  switchBg: string
}
const Header: FC<THeaderProps> = ({ switchText, switchBg }) => {
  const { darkMode, setDarkMode, locale, setLocale } = useAppContext()

  const { translations } = translationHelper(locale)

  return (
    <header className='sticky top-0 z-40 '>
      <nav
        className={` ${switchBg} p-5 border-slate-500 flex items-center justify-between ${
          darkMode ? 'text-slate-100' : 'text-slate-800'
        }`}
      >
        <Link href='/'>
          <h1 className='text-2xl font-burtons'>{translations.title}</h1>
        </Link>
        <ul className='flex items-center'>
          <li>
            <Link
              href='#contact'
              className={`ml-8 ${switchText} hover:underline`}
            >
              Contact
            </Link>
          </li>
          <li>
            <div className={`px-4 py-2 flex gap-1`}>
              {locale === 'en' ? (
                <div
                  onClick={() => setLocale('nl')}
                  className={`cursor-pointer`}
                >
                  EN
                </div>
              ) : (
                <div
                  onClick={() => setLocale('en')}
                  className={` cursor-pointer`}
                >
                  NL
                </div>
              )}
            </div>
          </li>
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode((prev: boolean) => !prev)}
              className=' cursor-pointer text-xl'
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
