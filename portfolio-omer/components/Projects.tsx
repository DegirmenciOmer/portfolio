import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { translationHelper } from "../data/translationHelper";

interface TProjectsProps {
  switchText: string;
  locale: string;
}

const Projects: FC<TProjectsProps> = ({ switchText }) => {
  const { locale } = useRouter();

  const { translations } = translationHelper(locale);
  return (
    <section
      id="projects"
      className={`shadow-lg p-10 rounded-xl my-10 flex-1 ${switchText}`}
    >
      <h3 className="text-center py-4 text-2xl mb-5 text-teal-600">
        {translations.projectsTitle}
      </h3>
      <ul>
        {translations.projectsNl
          .sort((a, b) => +b.id - +a.id)
          .map((project) => (
            <li
              key={project.id}
              className={`${switchText} flex justify-between max-w-xl mx-auto gap-1 my-4`}
            >
              {project.liveUrl || project.demoUrl ? (
                <Link
                  className="hover:text-teal-600"
                  href={`/projects/${project.id}`}
                >
                  {project.name}
                </Link>
              ) : (
                <p>{project.name}</p>
              )}
              <div className="align-left">
                <Link
                  className={`text-teal-800 underline hover:text-teal-600 rounded-md `}
                  href={project.liveUrl ? project.liveUrl : project.demoUrl}
                >
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
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Projects;
