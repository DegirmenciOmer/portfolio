import Head from "next/head";
import { useState } from "react";
import { translationHelper } from "../data/translationHelper";
import Header from "../components/Header";
import Showcase from "../components/Showcase";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "./Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [locale, setLocale] = useState("EN");
  const switchBg = darkMode ? "bg-slate-800" : "bg-slate-200";
  const switchText = darkMode ? "text-slate-100" : "text-slate-800";
  const { translations } = translationHelper(locale);
  return (
    <div>
      <Head>
        <title>{translations.title}</title>
      </Head>
      <div className={`md:px-20 lg:px-40 text-blue-100 font-bold ${switchBg} `}>
        <Header
          switchText={switchText}
          locale={locale}
          switchBg={switchBg}
          darkMode={darkMode}
          setLocale={setLocale}
          setDarkMode={setDarkMode}
        />
        <main className="min-h-screen max-w-3xl mx-auto">
          <Showcase switchText={switchText} locale={locale} />
          <Skills switchText={switchText} locale={locale} />
          <Projects switchText={switchText} locale={locale} />
          <Experience switchText={switchText} locale={locale} />
        </main>
        <Footer switchText={switchText} locale={locale} />
      </div>
    </div>
  );
}
