import Head from 'next/head'
import { translationHelper } from '../data/translationHelper'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import { useAppContext } from '../context/AppContext'

export default function Home() {
  const { locale, darkMode } = useAppContext()
  const switchBg = darkMode ? 'bg-slate-800' : 'bg-slate-200'
  const switchText = darkMode ? 'text-slate-100' : 'text-slate-800'
  const { translations } = translationHelper(locale)
  return (
    <div>
      <Head>
        <title>{translations.title}</title>
      </Head>
      <div className={`md:px-20 lg:px-40 text-blue-100 font-bold ${switchBg} `}>
        <Header switchText={switchText} switchBg={switchBg} />
        <main className='min-h-screen max-w-3xl mx-auto'>
          <Showcase switchText={switchText} />
          <div
            className={`text-center shadow-lg py-10 rounded-xl my-10  flex-1 ${switchText}`}
          >
            <h3 className='py-4 text-teal-600 text-2xl mb-5'>
              {translations.skillsTitle}
            </h3>
            <Skills skills={translations.skills} whereToUse={'showcase'} />
          </div>

          <Projects switchText={switchText} />
          <Experience switchText={switchText} />
        </main>
        <Footer switchText={switchText} />
      </div>
    </div>
  )
}
