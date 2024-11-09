import Link from 'next/link'
import React, { FC } from 'react'
import { useAppContext } from '../context/AppContext'
import { TProject, translationHelper } from '../data/translationHelper'
import Skills from './Skills'
import Slider from 'react-slick'
import Image from 'next/image'
import { supabase } from '../supabaseClient'

interface TProjectsProps {
  switchText: string
  projects: TProject[]
}
const Projects: FC<TProjectsProps> = ({ switchText, projects }) => {
  const { locale, darkMode } = useAppContext()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1240, // xl
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // lg
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
        <Slider {...settings}>
          {projects
            .sort((a, b) => +b.id - +a.id)
            .map((project) => (
              <div
                className={`${switchText} w-11/12 mx-auto flex flex-col items-center align-center justify-center aspect[48/47] mr-2`}
                key={project.id}
              >
                <Link
                  className='block w-11/12 mx-auto'
                  href={`projects/${+project.id}`}
                >
                  <Image
                    className='w-full aspect-video object-cover'
                    width={500}
                    height={500}
                    src={project.img}
                    alt='profile'
                  />
                  <div className='min-h-full'>
                    <h3 className='text-center h4 my-9'>{project.name}</h3>
                    {/* <Skills
                      skills={project.technologies}
                      whereToUse={'projects'}
                    /> */}
                  </div>
                </Link>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  )
}

export default Projects
