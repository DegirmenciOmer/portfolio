import React, { FC } from 'react'
import { useAppContext } from '../context/AppContext'
import { translationHelper } from '../data/translationHelper'
import Slider from 'react-slick'
interface TExperienceProps {
  switchText: string
}

const Experience: FC<TExperienceProps> = ({ switchText }) => {
  const { locale, darkMode } = useAppContext()
  const { translations } = translationHelper(locale)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // default, can be adjusted as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <section
      className={`text-center p-10  rounded-xl my-10  flex-1 ${switchText}`}
    >
      <h2
        className={`${
          darkMode ? 'text-lightgreen/70' : 'text-teal-600'
        } py-4 text-center mb-5`}
      >
        {translations.experienceTitle}
      </h2>

      <Slider {...settings} className=''>
        {translations.experience
          .sort((a, b) => +b.id - +a.id)
          .map((exp) => (
            <div
              className={`${switchText} flex flex-col gap-4 border sm:mx-1 h-40 w-80 
              ${
                darkMode ? 'border-lightgreen/70' : 'border-teal-600'
              } rounded-xl px-2 py-5`}
              key={exp.id}
            >
              <p>{exp.date}</p>
              <p>{exp.role}</p>
              <p>{exp.company}</p>
            </div>
          ))}
      </Slider>
    </section>
  )
}

export default Experience
