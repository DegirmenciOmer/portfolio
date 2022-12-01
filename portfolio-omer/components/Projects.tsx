import Link from "next/link";
import React, { FC } from "react";
import { translationHelper } from "../data/translationHelper";

interface TProjectsProps {
  switchText: string;
  locale: string;
}

const Projects: FC<TProjectsProps> = ({ switchText, locale }) => {
  const { translations } = translationHelper(locale);
  return (
    <section className={`shadow-lg p-10 rounded-xl my-10 flex-1 ${switchText}`}>
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
                  href={project.liveUrl ? project.liveUrl : project.demoUrl}
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
    </section>
  );
};

export default Projects;
