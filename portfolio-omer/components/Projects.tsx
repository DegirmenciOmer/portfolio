import Link from 'next/link'
import React, { FC } from 'react'
import { useAppContext } from '../context/AppContext'
import { TProject, translationHelper } from '../data/translationHelper'
import Slider from 'react-slick'
import Image from 'next/image'

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
      className={`my-16 flex flex-col flex-1 ${switchText}`}
    >
      <h2 className={`text-teal-600 py-4 text-center mb-10`}>
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
                {project.live_url || project.demo_url ? (
                  <a
                    className='block w-11/12 mx-auto'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={project.live_url || project.demo_url}
                  >
                    <Image
                      className='w-full aspect-video rounded object-cover'
                      width={500}
                      height={500}
                      src={project.img}
                      alt='profile'
                    />
                  </a>
                ) : (
                  <Link
                    className='block w-11/12 mx-auto'
                    href={`projects/${project.id}`}
                  >
                    <Image
                      className='w-full aspect-video rounded object-cover'
                      width={500}
                      height={500}
                      src={project.img}
                      alt='profile'
                    />
                  </Link>
                )}
                <div className='min-h-full'>
                  <h3 className='text-center h5 my-5'>{project.name}</h3>
                  <div className='flex gap-2 justify-center'>
                    {project.technologies.map((tech) => (
                      <div key={tech.id} className='image'>
                        <Image
                          className={`h-5 w-auto ${
                            !darkMode
                              ? 'mix-blend-darken'
                              : 'mix-blend-multiply'
                          }`}
                          alt={tech.name}
                          src={tech.img}
                          width={40}
                          height={40}
                        />
                      </div>
                    ))}
                  </div>
                  {project.description_en && (
                    <Link
                      className='text-center text-teal-600 block mt-4 font-bold'
                      href={`projects/${project.id}`}
                    >
                      Details
                    </Link>
                  )}
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  )
}

export default Projects
