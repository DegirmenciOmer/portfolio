import React, { FC, Dispatch, SetStateAction } from 'react'
import { useAppContext } from '../context/AppContext'
import { translationHelper } from '../data/translationHelper'
import Image from 'next/image'
interface TShowcase {
  switchText: string
}
const Showcase: FC<TShowcase> = ({ switchText }) => {
  const { locale } = useAppContext()
  const { translations } = translationHelper(locale)

  return (
    <section className='shadow-lg px-5 py-8 text-center'>
      <div className='flex items-center flex-col-reverse sm:flex-row gap-4'>
        <div className='title-block'>
          <h1 className='text-3xl sm:text-6xl font-bold py-2 text-teal-600 '>
            {translations.ownerName}
          </h1>
          <h2 className={`text-2xl ${switchText} py-2 pb-8 font-semibold`}>
            {translations.occupationText}
          </h2>
        </div>
        <Image
          className='mx-auto rounded-full w-[90%] sm:w-3/5 my-7 sm:mr-[-7%] object-cover aspect-square object-top'
          src='/images/Omer.webp'
          alt='profile'
          width={500}
          height={500}
        />
      </div>

      <p className={`text-md py-2 leading-8 font-medium ${switchText}`}>
        {translations.briefDescription}
      </p>
    </section>
  )
}

export default Showcase
