import React, { FC, Dispatch, SetStateAction } from 'react'
import { useAppContext } from '../context/AppContext'
import { translationHelper } from '../data/translationHelper'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
interface TShowcase {
  switchText: string
}
const Showcase: FC<TShowcase> = ({ switchText }) => {
  const { locale, darkMode } = useAppContext()
  const { translations } = translationHelper(locale)

  return (
    <section className='px-5 py-8 text-center'>
      <div className='flex items-center flex-col-reverse sm:grid grid-cols-12 gap-4'>
        <div className='title-block col-span-4 sm:relative'>
          <h1
            className={`z-10 relative sm:absolute top-1/2 sm:-translate-y-1/2 sm:left-0 py-2 text-center text-teal-600 sm:text-left max-sm:min-h-[10rem]`}
          >
            <TypeAnimation
              sequence={[
                translations.ownerName,
                1000,
                translations.occupationText,
                1000,
                'Team player',
                1000,
                'Passion for excellence',
                1000,
                'Problem solver',
                1000,
                'Pixel perfectionist',
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>
        <div className='col-span-8'>
          <Image
            className='mx-auto rounded-full w-full h-full my-7 sm:mr-[-7%] xl:mr-0 object-cover aspect-square max-w-4xl object-top'
            src='/images/Omer.webp'
            alt='profile'
            width={900}
            height={900}
            priority={true}
          />
        </div>
      </div>

      {translations.briefDescription.map((description, idx) => {
        return (
          <p
            key={idx}
            className={`text-md py-2 leading-8 font-medium max-w-5xl mx-auto text-center ${switchText} ${
              darkMode ? 'text-lightgreen' : 'text-black'
            } text-left lg:w-11/12 xl-`}
          >
            {description}
          </p>
        )
      })}
    </section>
  )
}

export default Showcase
