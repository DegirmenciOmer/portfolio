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
import Head from 'next/head'
import Layout from '../../components/Layout'

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
  } | null
}

const DynamicPage: FC<TProject> = ({ project }) => {
  const { darkMode, locale } = useAppContext()
  const { translations } = translationHelper(locale)
  const switchBg = darkMode ? 'bg-slate-800' : 'bg-slate-200'
  const switchText = darkMode ? 'text-slate-100' : 'text-slate-800'

  if (!project) {
    return <div>Project not found</div>
  }

  const {
    id,
    name,
    img,
    sourceUrl,
    liveUrl,
    technologies,
    descriptionEN,
    descriptionNL,
    demoUrl,
  } = project

  const projectId = +id
  const descriptionToRender = locale === 'en' ? descriptionEN : descriptionNL
  return (
    <>
      <Head>
        <title>Omer's Projects - {name}</title>
        <meta
          name='google-site-verification'
          content='KMXIazCvCftfk6ZYi6XzMQtXTWxdZJ3y4RTdcB3t5ao'
        />
      </Head>
      <Layout>
        {' '}
        <Header switchText={switchText} switchBg={switchBg} />
        <main className={`${switchText} px-5 min-h-screen max-w-3xl mx-auto`}>
          <Link href='/#projects'>
            <button className='text-teal-500 my-4 p-2 px-3 rounded-md text-4xl'>
              <BsFillArrowLeftCircleFill />
            </button>
          </Link>
          <h1 className='py-4 text-center text-teal-600 h2  mb-5'>{name}</h1>
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
                  rel='noreferrer'
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
                rel='noreferrer'
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
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id
  let project = null

  if (id !== undefined && projects[+id]) {
    project = {
      ...projects[+id],
      technologies: projects[+id].technologies.map((tech) => {
        return { ...tech, Icon: null }
      }),
    }
  }

  return {
    props: { project },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }))

  return { paths, fallback: false }
}
export default DynamicPage
