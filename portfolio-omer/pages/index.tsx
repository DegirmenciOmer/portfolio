import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

import {
  AiFillLinkedin,
  AiFillGooglePlusCircle,
  AiFillGithub,
} from "react-icons/ai";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Omer's Portfolio</title>
      </Head>
      <main className="px-10  text-blue-100 bg-slate-800 font-bold">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Omer's Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode((prev) => !prev)}
                  className=" cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href=""
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium">
              Omer Degirmenci
            </h2>
            <h3 className="text-2xl py-2">Frontend Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quaerat sit suscipit accusantium sapiente, rerum placeat,
              molestias totam ut perferendis dolores! Autem laudantium nemo
              animi veritatis ut dolor atque vitae!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGooglePlusCircle />
            <AiFillGithub />
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
            <p className="py-2">
              Are you interested in feedback for your current project? I can
              give you tips and tricks to level it up.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
        </section>
        <section className="py-10"></section>
      </main>
    </div>
  );
}
