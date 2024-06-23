import Head from 'next/head'
import { translationHelper } from '../data/translationHelper'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import { useAppContext } from '../context/AppContext'
import Layout from '../components/Layout'

export default function Home() {
  const { locale, darkMode } = useAppContext()
  const switchBg = darkMode ? 'bg-slate-800' : 'bg-slate-200'
  const switchText = darkMode ? 'text-slate-100' : 'text-slate-800'
  const { translations } = translationHelper(locale)
  return (
    <>
      <Head>
        <title>{translations.title}</title>
        <meta
          name='google-site-verification'
          content='KMXIazCvCftfk6ZYi6XzMQtXTWxdZJ3y4RTdcB3t5ao'
        />
        <meta property='og:image' content='' />
      </Head>
      <Layout>
        <div className={` text-blue-100 ${switchBg} `}>
          <Header switchText={switchText} switchBg={switchBg} />
          <main className='min-h-screen overflow-hidden'>
            <Showcase switchText={switchText} />
            <div
              className={`text-center py-10 rounded-xl my-10  flex-1 ${switchText}`}
            >
              <h2
                className={`${
                  darkMode ? 'text-lightgreen/70' : 'text-teal-600'
                } py-4  mb-5`}
              >
                {translations.skillsTitle}
              </h2>
              <Skills skills={translations.skills} whereToUse={'showcase'} />
            </div>

            <Projects switchText={switchText} />
            <Experience switchText={switchText} />
          </main>
          <Footer switchText={switchText} />
        </div>
      </Layout>
    </>
  )
}
