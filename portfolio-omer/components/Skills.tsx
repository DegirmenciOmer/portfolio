import Image from "next/image";
import React, { FC } from "react";

interface TSkillsProps {
  switchText?: string;
  skills: skill[];
  skillsTitle: string;
}

export type skill = { id: string; name: string; img: string };

const Skills: FC<TSkillsProps> = ({ switchText, skills, skillsTitle }) => {
  return (
    <div
      className={`text-center shadow-lg p-10 rounded-xl my-10  flex-1 ${switchText}`}
    >
      <h3 className="py-4 text-teal-600 text-2xl mb-5">{skillsTitle}</h3>
      <ul className="flex m-auto justify-center flex-wrap gap-2 max-w-xl">
        {skills.map((skill: skill) => (
          <li key={skill.id} className={`${switchText} px-3 rounded w-15 py-2`}>
            <img
              className="bg-red max-w-[62px]"
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
