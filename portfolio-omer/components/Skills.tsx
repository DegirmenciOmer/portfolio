import React, { FC } from "react";

interface TSkillsProps {
  switchText?: string;
  skills: skill[];
  skillsTitle: string;
}

export type skill = { id: string; name: string };

const Skills: FC<TSkillsProps> = ({ switchText, skills, skillsTitle }) => {
  return (
    <div
      className={`text-center shadow-lg p-10 rounded-xl my-10  flex-1 ${switchText}`}
    >
      <h3 className="py-4 text-teal-600 text-2xl mb-5">{skillsTitle}</h3>
      <ul className="flex m-auto justify-center flex-wrap gap-2 max-w-xl">
        {skills.map((skill: skill) => (
          <li
            key={skill.id}
            className={`${switchText} border px-3 border-teal-600 rounded-xl  py-1`}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
