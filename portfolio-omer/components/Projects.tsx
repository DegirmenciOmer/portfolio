import Link from 'next/link'
import React, { FC } from 'react'
import { useAppContext } from '../context/AppContext'
import { translationHelper } from '../data/translationHelper'

interface TProjectsProps {
  switchText: string
}
const Projects: FC<TProjectsProps> = ({ switchText }) => {
  const { locale } = useAppContext()

  const { translations } = translationHelper(locale)
  return (
    <section
      id='projects'
      className={`shadow-lg p-10 my-10 flex-1 ${switchText}`}
    >
      <h3 className='text-center py-4 text-2xl mb-10 text-teal-600'>
        {translations.projectsTitle}
      </h3>
      <ul className='flex flex-col gap-8 items-center justify-center'>
        {translations.projects
          .sort((a, b) => +b.id - +a.id)
          .map((project) => (
            <Link key={project.id} href={`projects/${+project.id}`}>
              <li
                className={`${switchText} mb-9 flex flex-col items-center align-center justify-center`}
              >
                <p className='text-center mb-9'>{project.name}</p>
                <img src={project.img} alt='profile' />
              </li>
            </Link>
          ))}
      </ul>
    </section>
  )
}

export default Projects
