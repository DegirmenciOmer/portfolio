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
      <ul className="flex flex-col gap-8 items-center justify-center">
        {translations.projects
          .sort((a, b) => +b.id - +a.id)
          .map((project) => (
            <Link
              className="flex justify-center items-center"
              href={`projects/${+project.id}`}
            >
              <li
                key={project.id}
                className={`${switchText} flex items-center align-center justify-center`}
              >
                <img src={project.img} alt="profile" />
                <p className="text-center">{project.name}</p>
              </li>
            </Link>
          ))}
      </ul>
    </section>
  );
};

export default Projects;
