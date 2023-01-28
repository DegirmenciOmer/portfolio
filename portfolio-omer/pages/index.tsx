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
          <Skills
            switchText={switchText}
            skills={translations.skills}
            skillsTitle={translations.skillsTitle}
            isPage={false}
          />
          <Projects switchText={switchText} />
          <Experience switchText={switchText} />
        </main>
        <Footer switchText={switchText} />
      </div>
    </div>
  )
}
