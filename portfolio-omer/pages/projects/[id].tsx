import { translationHelper } from '../../data/translationHelper'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import React, { FC } from 'react'
import { useAppContext } from '../../context/AppContext'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'
import Skills, { Tskill } from '../../components/Skills'

const {
  translations: { projects },
} = translationHelper('en')

interface TProject {
  project: {
    id: string
    name: string
    sourceUrl: string
    liveUrl: string
    technologies: Tskill[]
    locale: string
    descriptionEN: string[]
    descriptionNL: string[]
    demoUrl: string
    img: string
  }
}

const DynamicPage: FC<TProject> = ({
  project: {
    id,
    name,
    img,
    sourceUrl,
    liveUrl,
    technologies,
    descriptionEN,
    descriptionNL,
    demoUrl,
  },
}) => {
  const { darkMode, locale } = useAppContext()
  const { translations } = translationHelper(locale)
  const switchBg = darkMode ? 'bg-slate-800' : 'bg-slate-200'
  const switchText = darkMode ? 'text-slate-100' : 'text-slate-800'

  const projectId = +id

  const descriptionToRender = locale === 'en' ? descriptionEN : descriptionNL

  return (
    <div className={`md:px-20 lg:px-40 text-blue-100 font-medium ${switchBg} `}>
      <Header switchText={switchText} switchBg={switchBg} />
      <main className={`${switchText} px-5 min-h-screen max-w-3xl mx-auto`}>
        <Link href='/#projects'>
          <button className='text-teal-500 my-4 p-2 px-3 rounded-md text-4xl'>
            <BsFillArrowLeftCircleFill />
          </button>
        </Link>
        <h2 className='py-4 text-center text-teal-600 text-2xl mb-5'>{name}</h2>
        <img
          className='mx-auto rounded-lg w-full my-5'
          src={img}
          alt='profile'
        />
        {descriptionToRender.map((text: string, idx: number) => (
          <p key={idx} className='mb-3 font-medium'>
            {text}
          </p>
        ))}

        <div className='text-center my-12'>
          {(sourceUrl || demoUrl || liveUrl) && (
            <>
              {translations.seeText}&nbsp;
              <a
                target='_blank'
                className={`text-teal-800 underline hover:text-teal-600 rounded-md `}
                href={liveUrl ? liveUrl : demoUrl}
              >
                {liveUrl
                  ? translations.liveText
                  : demoUrl
                  ? translations.demoText
                  : ''}
              </a>
            </>
          )}
          {sourceUrl && (
            <a
              target='_blank'
              className={`text-teal-800 underline hover:text-teal-600 rounded-md`}
              href={sourceUrl}
            >
              &nbsp;|&nbsp;{translations.sourceText}
            </a>
          )}
        </div>

        <Skills skills={technologies} whereToUse={'project-page'} />
        <div className='flex gap-3 justify-center'>
          {projectId < projects.length - 1 && (
            <Link href={`/projects/${projectId + 1}`}>
              <button className='text-teal-500 my-4 p-2 px-3 rounded-md text-4xl'>
                <BsFillArrowLeftCircleFill />
              </button>
            </Link>
          )}
          {projectId > 0 && (
            <Link href={`/projects/${projectId - 1}`}>
              <button className='text-teal-500 my-4 p-2 px-3 rounded-md text-4xl'>
                <BsFillArrowRightCircleFill />
              </button>
            </Link>
          )}
        </div>
      </main>
      <Footer switchText={switchText} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id
  const project = id
    ? {
        // Icons are not serialized so they are excluded in project page
        ...projects[+id],
        technologies: projects[+id].technologies.map((tech) => {
          return { ...tech, Icon: null }
        }),
      }
    : undefined

  return {
    props: { project },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => {
    return {
      params: { id: project.id.toString() },
    }
  })

  return { paths, fallback: false }
}

export default DynamicPage
