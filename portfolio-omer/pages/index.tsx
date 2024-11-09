import Head from 'next/head'
import { TProject, translationHelper } from '../data/translationHelper'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import { useAppContext } from '../context/AppContext'
import Layout from '../components/Layout'
import { supabase } from '../supabaseClient'
import { FC } from 'react'
import { fetchProjectsQueryString } from '../utils/util'

interface THomeProps {
  projects: TProject[]
}

const Home: FC<THomeProps> = ({ projects }) => {
  const { locale, darkMode } = useAppContext()
  const switchBg = darkMode ? 'bg-slate-800' : 'bg-slate-200'
  const switchText = darkMode ? 'text-slate-100' : 'text-slate-800'
  const { translations } = translationHelper(locale)

  return (
    <>
      <Head>
        <title>Omer Degirmenci</title>
        <meta
          name='google-site-verification'
          content='KMXIazCvCftfk6ZYi6XzMQtXTWxdZJ3y4RTdcB3t5ao'
        />
        <meta property='og:image' content='../public/og-image.png' />
      </Head>
      <Layout>
        <div className={` text-blue-100 ${switchBg} `}>
          <Header switchText={switchText} switchBg={switchBg} />
          <main className='min-h-screen overflow-hidden'>
            <Showcase switchText={switchText} />

            <Skills
              skillsTitle={translations.skillsTitle}
              skills={translations.skills}
              whereToUse={'showcase'}
            />

            <Projects projects={projects} switchText={switchText} />
            <Experience switchText={switchText} />
          </main>
          <Footer switchText={switchText} />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  // Fetch projects and their technologies
  const { data: projects, error } = await supabase
    .from('projects')
    .select(fetchProjectsQueryString)

  if (error) {
    console.log(error)
    return { props: { projects: [] } }
  }

  return { props: { projects } }
}

export default Home
