import Link from "next/link";
import React, { Dispatch, FC, SetStateAction } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useAppContext } from "../context/AppContext";
import { translationHelper } from "../data/translationHelper";
interface THeaderProps {
  switchText: string;
  switchBg: string;
}
const Header: FC<THeaderProps> = ({ switchText, switchBg }) => {
  const { darkMode, setDarkMode, locale, setLocale } = useAppContext();

  const { translations } = translationHelper(locale);

  return (
    <header className="sticky top-0 z-10 ">
      <nav
        className={` ${switchBg} p-5 sm:py-10 max-w-3xl mx-auto border-b border-slate-500 flex items-center justify-between ${
          darkMode ? "text-slate-100" : "text-slate-800"
        }`}
      >
        <h1 className="text-2xl font-burtons">{translations.title}</h1>
        <ul className="flex items-center">
          <li>
            <Link
              href="#contact"
              className={`ml-8 ${switchText} hover:underline`}
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={() => setLocale(locale === "en" ? "nl" : "en")}
              className={`px-4 py-2`}
            >
              <span className={`${locale === "nl" && "text-gray-500"}`}>
                EN
              </span>
              &nbsp;|&nbsp;
              <span className={`${locale === "en" && "text-gray-500"}`}>
                NL
              </span>
            </button>
          </li>
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode((prev: boolean) => !prev)}
              className=" cursor-pointer text-xl"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
