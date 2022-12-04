import { translationHelper } from "../../data/translationHelper";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import React, { FC } from "react";
import { useAppContext } from "../../context/AppContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Skills, { skill } from "../../components/Skills";

const {
  translations: { projects },
} = translationHelper("en");

interface TProject {
  project: {
    id: string;
    name: string;
    sourceUrl: string;
    liveUrl: string;
    technologies: skill[];
    locale: string;
    description: string[];
    demoUrl: string;
  };
}

const DynamicPage: FC<TProject> = ({ project }) => {
  const { darkMode, locale } = useAppContext();
  const { translations } = translationHelper(locale);
  const switchBg = darkMode ? "bg-slate-800" : "bg-slate-200";
  const switchText = darkMode ? "text-slate-100" : "text-slate-800";

  const translatedProject = projects[+project.id];

  return (
    <div className={`md:px-20 lg:px-40 text-blue-100 font-bold ${switchBg} `}>
      <Header switchText={switchText} switchBg={switchBg} />
      <main className={`${switchText} px-5 min-h-screen max-w-3xl mx-auto`}>
        <Link href={`"/#projects"`}>
          <button className="bg-teal-500 my-4 px-2 rounded-md">Back</button>
        </Link>
        <h2 className="py-4 text-center text-teal-600 text-2xl mb-5">
          {translatedProject.name}{" "}
        </h2>
        {translatedProject.description.map((text, idx) => (
          <p key={idx} className="text-center">
            {text}
          </p>
        ))}

        <div className="text-center">
          <Link
            className={`text-teal-800 underline hover:text-teal-600 rounded-md `}
            href={project.liveUrl ? project.liveUrl : project.demoUrl}
          >
            {translations.seeText}&nbsp;
            {project.liveUrl
              ? translations.liveText
              : project.demoUrl
              ? translations.demoText
              : ""}
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

        <Skills
          skills={project.technologies}
          skillsTitle={translations.techTitle}
        />
      </main>
      <Footer switchText={switchText} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const project = id ? projects[+id] : undefined;

  return {
    props: { project },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => {
    return {
      params: { id: project.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export default DynamicPage;
