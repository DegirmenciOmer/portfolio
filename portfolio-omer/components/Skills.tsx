import React, { FC } from 'react'
import { useAppContext } from '../context/AppContext'
import Image from 'next/image'

interface TSkillsProps {
  switchText?: string
  skills: Tskill[]
  whereToUse: 'showcase' | 'projects' | 'project-page'
  skillsTitle?: string
}

export type Tskill = {
  id: string
  name: string
  img: string
  Icon?: React.ComponentType<any>
}

const Skills: FC<TSkillsProps> = ({
  switchText,
  skills,
  whereToUse,
  skillsTitle,
}) => {
  const { darkMode } = useAppContext()

  return (
    <section className='my-12 px-3'>
      <h2 className={`text-teal-600 py-4 mb-5 text-center`}>{skillsTitle}</h2>

      <ul
        className={`flex flex-wrap ${
          whereToUse === 'showcase' ? 'gap-5' : 'gap-1'
        } m-auto w-full justify-center max-w-xl`}
      >
        {skills.map((skill: Tskill) => {
          const { img, name, Icon, id } = skill
          return (
            <li
              key={id}
              className={`${switchText} ${
                whereToUse === 'showcase'
                  ? `w-2/5 sm:w-1/5  ${darkMode && 'bg-[#fff]'}`
                  : whereToUse === 'project-page'
                  ? `w-2/5 sm:w-1/5 ${darkMode && 'bg-[#fff]'}`
                  : ''
              }  rounded px-3 max-w-[130px] flex justify-center items-center`}
            >
              {whereToUse === 'projects' && Icon ? (
                <p className=' inline-flex'>
                  <Icon /> &nbsp;
                  <span className='text-sm font-normal'>{name}</span>
                </p>
              ) : (
                // <img
                //   className={`w-full h-full max-h-[90%] m-auto object-contain ${
                //     !darkMode ? 'mix-blend-darken' : 'mix-blend-multiply'
                //   }`}
                //   src={img}
                //   alt={name}
                // />
                <div className='image py-2'>
                  <Image
                    className={`h-10 w-auto ${
                      !darkMode ? 'mix-blend-darken' : 'mix-blend-multiply'
                    }`}
                    alt={name}
                    src={img}
                    width={40}
                    height={40}
                  />
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skills
