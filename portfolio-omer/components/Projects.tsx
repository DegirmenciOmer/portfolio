import Link from 'next/link'
import React, { FC } from 'react'
import { useAppContext } from '../context/AppContext'
import { translationHelper } from '../data/translationHelper'
import Skills from './Skills'
import Slider from 'react-slick'

interface TProjectsProps {
  switchText: string
}
const Projects: FC<TProjectsProps> = ({ switchText }) => {
  const { locale, darkMode } = useAppContext()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const { translations } = translationHelper(locale)
  return (
    <section
      id='projects'
      className={`p-10 my-10 flex flex-col flex-1 ${switchText}`}
    >
      <h2
        className={`${
          darkMode ? 'text-lightgreen/70' : 'text-teal-600'
        } py-4 text-center mb-10`}
      >
        {translations.projectsTitle}
      </h2>
      <div className='slider-wrapper'>
        <Slider {...settings} className=''>
          {translations.projects
            .sort((a, b) => +b.id - +a.id)
            .map((project) => (
              <Link key={project.id} href={`projects/${+project.id}`}>
                <div
                  className={`${switchText} flex flex-col items-center align-center justify-center`}
                >
                  <img width={500} src={project.img} alt='profile' />
                  <h3 className='text-center my-9'>{project.name}</h3>
                  <Skills
                    skills={project.technologies}
                    whereToUse={'projects'}
                  />
                </div>
              </Link>
            ))}
        </Slider>
      </div>
    </section>
  )
}

export default Projects
