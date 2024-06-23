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
            className={`z-10 relative sm:absolute sm:top-1/2 sm:left-0 sm:-translate-y-1/2 py-2   ${
              darkMode ? 'text-teal-600' : 'text-teal-600'
            } text-center sm:text-left max-sm:min-h-[10rem]`}
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                translations.ownerName,
                1000, // wait 1s before replacing "Mice" with "Hamsters"
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
        <div className=' col-span-8'>
          <Image
            className='mx-auto rounded-full w-full h-full my-7 sm:mr-[-7%] xl:mr-0 object-cover aspect-square object-top'
            src='/images/Omer.webp'
            alt='profile'
            width={900}
            height={900}
          />
        </div>
      </div>

      <p
        className={`text-md py-2 leading-8 font-medium ${switchText} ${
          darkMode ? 'text-lightgreen' : 'text-black'
        }`}
      >
        {translations.briefDescription}
      </p>
    </section>
  )
}

export default Showcase
