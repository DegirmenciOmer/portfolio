import Link from 'next/link'
import React, { FC } from 'react'
import { useAppContext } from '../context/AppContext'
import { translationHelper } from '../data/translationHelper'
import Skills from './Skills'

interface TProjectsProps {
  switchText: string
}
const Projects: FC<TProjectsProps> = ({ switchText }) => {
  const { locale } = useAppContext()

  const { translations } = translationHelper(locale)
  return (
    <section
      id='projects'
      className={`shadow-lg p-10 my-10 flex flex-col flex-1 ${switchText}`}
    >
      <h2 className='text-center py-4 text-2xl mb-10 text-teal-600'>
        {translations.projectsTitle}
      </h2>
      <ul className='flex flex-col gap-8 items-center justify-center'>
        {translations.projects
          .sort((a, b) => +b.id - +a.id)
          .map((project) => (
            <Link key={project.id} href={`projects/${+project.id}`}>
              <li
                className={`${switchText} shadow-md mb-9 pb-7 flex flex-col items-center align-center justify-center`}
              >
                <img width={500} src={project.img} alt='profile' />
                <h3 className='text-center my-9'>{project.name}</h3>
                <Skills skills={project.technologies} whereToUse={'projects'} />
              </li>
            </Link>
          ))}
      </ul>
    </section>
  )
}

export default Projects
