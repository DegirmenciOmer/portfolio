import React, { FC } from 'react'
import { useAppContext } from '../context/AppContext'

interface TSkillsProps {
  switchText?: string
  skills: Tskill[]
  whereToUse: 'showcase' | 'projects' | 'project-page'
}

export type Tskill = {
  id: string
  name: string
  img: string
  Icon?: React.ComponentType<any>
}

const Skills: FC<TSkillsProps> = ({ switchText, skills, whereToUse }) => {
  const { darkMode } = useAppContext()
  return (
    <>
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
                  ? 'w-full sm:w-1/5'
                  : whereToUse === 'project-page'
                  ? 'w-1/5'
                  : ''
              } rounded p-2 m-auto`}
            >
              {whereToUse === 'projects' && Icon ? (
                <p className=' inline-flex'>
                  <Icon /> &nbsp;
                  <span className='text-sm font-normal'>{name}</span>
                </p>
              ) : (
                <img
                  className={`w-40 sm:w-30 lg:w-40 mx-auto  ${
                    !darkMode ? 'mix-blend-darken' : 'mix-blend-lighten'
                  }`}
                  src={img}
                  alt={name}
                />
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Skills
