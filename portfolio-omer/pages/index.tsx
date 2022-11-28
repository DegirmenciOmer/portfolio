import Head from "next/head";
import { BsFillMoonStarsFill, BsPhone } from "react-icons/bs";
import { useState } from "react";
import profileImg from "../public/images/profile.png";

import {
  AiFillLinkedin,
  AiFillGooglePlusCircle,
  AiFillGithub,
} from "react-icons/ai";
import { translationHelper } from "./translationHelper";
import Link from "next/link";
import Image from "next/image";

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
      <main className={`md:px-20 lg:px-40 text-blue-100 font-bold ${switchBg}`}>
        <section className="min-h-screen">
          <nav
            className={`sticky px-5 py-10 mb-12 border-b border-slate-500 flex justify-between ${
              darkMode ? "text-slate-100" : "text-slate-800"
            }`}
          >
            <h1 className="text-2xl font-burtons">{translations.title}</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode((prev) => !prev)}
                  className=" cursor-pointer text-xl"
                />
              </li>
              <li>
                <button
                  onClick={() => setLocale(locale === "EN" ? "NL" : "EN")}
                  className={`bg-gradient-to-r from-teal-900 to-teal-500 px-4 py-2 rounded-md ml-8`}
                >
                  <span className={`${locale === "NL" && "text-gray-500"}`}>
                    EN
                  </span>
                  &nbsp;|&nbsp;
                  <span className={`${locale === "EN" && "text-gray-500"}`}>
                    NL
                  </span>
                </button>
              </li>
            </ul>
          </nav>
          <div className="px-5 text-center py-10">
            <Image
              className="mx-auto rounded-full xs:w-1/3"
              src={profileImg}
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
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGooglePlusCircle />
            <AiFillGithub />
          </div>
          <div
            className={`text-center shadow-lg p-10 rounded-xl my-10  flex-1 ${switchText}`}
          >
            <h3 className="py-4 text-teal-600">{translations.skillsTitle}</h3>
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
            className={` shadow-lg p-10 rounded-xl my-10  flex-1 ${switchText}`}
          >
            <h3 className="text-center py-4 text-lg text-teal-600">
              {translations.projectsTitle}
            </h3>
            <ul>
              {translations.projects.map((project) => (
                <li
                  key={project.id}
                  className={`${switchText} flex justify-between max-w-xl mx-auto gap-1 my-2`}
                >
                  <Link className="hover:text-teal-600" href={project.demoUrl}>
                    {project.name}
                  </Link>
                  <Link
                    className={`text-teal-800 underline hover:text-teal-600 rounded-md ml-8`}
                    href={project.sourceUrl}
                  >
                    {translations.sourceText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`text-center shadow-lg p-10 rounded-xl my-10  flex-1 ${switchText}`}
          >
            <h3 className="py-4 text-lg text-teal-600">
              {translations.experienceTitle}
            </h3>
            <ul>
              {translations.experience.map((exp) => (
                <li key={exp.id} className={`${switchText} py-1`}>
                  {exp.role}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="py-10"></section>
      </main>
    </div>
  );
}
