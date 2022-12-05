import Image from "next/image";
import React, { FC } from "react";

interface TSkillsProps {
  switchText?: string;
  skills: skill[];
  skillsTitle: string;
  isPage: boolean;
}

export type skill = { id: string; name: string; img: string };

const Skills: FC<TSkillsProps> = ({
  switchText,
  skills,
  skillsTitle,
  isPage,
}) => {
  return (
    <div
      className={`text-center shadow-lg py-10 rounded-xl my-10  flex-1 ${switchText}`}
    >
      <h3 className="py-4 text-teal-600 text-2xl mb-5">{skillsTitle}</h3>
      <ul className="flex m-auto justify-center flex-wrap gap-2 max-w-xl">
        {skills.map((skill: skill) => (
          <li
            key={skill.id}
            className={`${switchText} ${
              isPage ? "w-1/4" : "w-full sm:w-1/5"
            } rounded py-2`}
          >
            <img
              className={`w-40 sm:w-30 lg:w-40 mx-auto`}
              src={skill.img}
              alt={skill.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
