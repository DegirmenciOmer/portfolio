import React, { FC, Dispatch, SetStateAction } from 'react'
import { useAppContext } from '../context/AppContext'
import { translationHelper } from '../data/translationHelper'
interface TShowcase {
  switchText: string
}
const Showcase: FC<TShowcase> = ({ switchText }) => {
  const { locale } = useAppContext()
  const { translations } = translationHelper(locale)

  return (
    <section className='shadow-lg px-5 py-8 text-center'>
      <img
        className='mx-auto rounded-full w-4/5 sm:w-2/5 my-7'
        src='/images/profile.jpg'
        alt='profile'
      />
      <h2 className='text-4xl py-2 text-teal-600 font-medium'>
        {translations.ownerName}
      </h2>
      <h3 className={`text-2xl ${switchText} py-2 pb-8 font-semibold`}>
        {translations.occupationText}
      </h3>
      <p className={`text-md py-2 leading-8 font-medium ${switchText}`}>
        {translations.briefDescription}
      </p>
    </section>
  )
}

export default Showcase
