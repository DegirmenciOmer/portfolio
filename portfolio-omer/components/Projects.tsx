import Link from "next/link";
import React, { FC } from "react";
import { useAppContext } from "../context/AppContext";
import { translationHelper } from "../data/translationHelper";

interface TProjectsProps {
  switchText: string;
}
const Projects: FC<TProjectsProps> = ({ switchText }) => {
  const { locale } = useAppContext();

  const { translations } = translationHelper(locale);
  return (
    <section
      id="projects"
      className={`shadow-lg p-10 my-10 flex-1 ${switchText}`}
    >
      <h3 className="text-center py-4 text-2xl mb-5 text-teal-600">
        {translations.projectsTitle}
      </h3>
      <ul className="flex flex-col gap-4 items-center justify-center">
        {translations.projects
          .sort((a, b) => +b.id - +a.id)
          .map((project) => (
            <li
              key={project.id}
              className={`${switchText} rounded-lg p-3 flex flex-col items-center max-w-xl mx-auto gap-1 my-4`}
            >
              <img
                className="mx-auto rounded-lg w-2/3 my-5"
                src={project.img}
                alt="profile"
              />
              <Link href={`projects/${+project.id}`}>
                <button className="w-full bg:text-teal-600">
                  {project.name}
                </button>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Projects;
