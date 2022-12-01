import Head from "next/head";
import { BsFillMoonStarsFill, BsTelephoneFill } from "react-icons/bs";
import { useState } from "react";

import {
  AiFillLinkedin,
  AiFillGooglePlusCircle,
  AiFillGithub,
} from "react-icons/ai";
import { translationHelper } from "../data/translationHelper";
import Link from "next/link";
import Header from "../components/Header";

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
          <div className="px-5 text-center">
            <img
              className="mx-auto rounded-full w-1/3 my-5"
              src="/images/profile.png"
              alt="profile"
            />
            <h2 className="text-4xl py-2 text-teal-600 font-medium">
              {translations.ownerName}
            </h2>
            <h3 className={`text-2xl ${switchText} py-2 pb-8`}>
              {translations.occupationText}
            </h3>
            <p className={`text-md py-2 leading-8 ${switchText}`}>
              {translations.briefDescription}
            </p>
          </div>
          <div
            className={`text-center shadow-lg p-10 rounded-xl my-10  flex-1 ${switchText}`}
          >
            <h3 className="py-4 text-teal-600 text-2xl mb-5">
              {translations.skillsTitle}
            </h3>
            <ul className="flex m-auto justify-center flex-wrap gap-2 max-w-xl">
              {translations.skills.map((skill) => (
                <li
                  key={skill.id}
                  className={`${switchText} border px-3 border-teal-600 rounded-xl  py-1`}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`shadow-lg p-10 rounded-xl my-10 flex-1 ${switchText}`}
          >
            <h3 className="text-center py-4 text-2xl mb-5 text-teal-600">
              {translations.projectsTitle}
            </h3>
            <ul>
              {translations.projects
                .sort((a, b) => +b.id - +a.id)
                .map((project) => (
                  <li
                    key={project.id}
                    className={`${switchText} flex justify-between max-w-xl mx-auto gap-1 my-4`}
                  >
                    <Link
                      className="hover:text-teal-600"
                      href={project.liveUrl ? project.liveUrl : project.demoUrl}
                    >
                      {project.name}
                    </Link>
                    <div className="align-left">
                      <Link
                        className={`text-teal-800 underline hover:text-teal-600 rounded-md `}
                        href={
                          project.liveUrl ? project.liveUrl : project.demoUrl
                        }
                      >
                        {project.liveUrl
                          ? translations.liveText
                          : translations.demoText}
                      </Link>
                      {project.sourceUrl && (
                        <Link
                          className={`text-teal-800 underline hover:text-teal-600 rounded-md`}
                          href={project.sourceUrl}
                        >
                          &nbsp;|&nbsp;{translations.sourceText}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div
            className={`text-center shadow-lg p-10  rounded-xl my-10  flex-1 ${switchText}`}
          >
            <h3 className="py-4 text-2xl mb-5 text-teal-600">
              {translations.experienceTitle}
            </h3>
            <ul className="flex gap-4 flex-wrap items-center justify-center">
              {translations.experience
                .sort((a, b) => +b.id - +a.id)
                .map((exp) => (
                  <li
                    className={`${switchText} flex flex-col gap-4 border h-40 w-80 border-teal-600 rounded-xl px-2 py-5`}
                    key={exp.id}
                  >
                    <p>{exp.date}</p>
                    <p>{exp.role}</p>
                    <p>{exp.company}</p>
                  </li>
                ))}
            </ul>
          </div>
        </main>
        <footer id="contact" className="py-4">
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 my-5">
            <Link target="_blank" href={translations.linkedinUrl}>
              <AiFillLinkedin />
            </Link>

            <Link href="mailto:rumidegirmenci0@gmail.com">
              <AiFillGooglePlusCircle />
            </Link>

            <Link target="_blank" href={translations.githubUrl}>
              <AiFillGithub />
            </Link>
          </div>
          <Link href="tel:+31642587180" className={`${switchText} text-center`}>
            <p className="flex justify-center items-center gap-2">
              <BsTelephoneFill /> 06 42 587 180
            </p>
          </Link>
        </footer>
      </div>
    </div>
  );
}
