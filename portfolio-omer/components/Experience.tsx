import React, { FC } from "react";
import { useAppContext } from "../context/AppContext";
import { translationHelper } from "../data/translationHelper";
interface TExperienceProps {
  switchText: string;
}

const Experience: FC<TExperienceProps> = ({ switchText }) => {
  const { locale } = useAppContext();
  const { translations } = translationHelper(locale);
  return (
    <section
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
    </section>
  );
};

export default Experience;
