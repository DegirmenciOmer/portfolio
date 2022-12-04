import Link from "next/link";
import React, { FC } from "react";
import {
  AiFillGithub,
  AiFillGooglePlusCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { useAppContext } from "../context/AppContext";
import { translationHelper } from "../data/translationHelper";

interface TFooterProps {
  switchText: string;
}

const Footer: FC<TFooterProps> = ({ switchText }) => {
  const { locale } = useAppContext();
  const { translations } = translationHelper(locale);
  return (
    <footer id="contact" className="py-5">
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 my-5">
        <Link target="_blank" href={translations.linkedinUrl}>
          <AiFillLinkedin />
        </Link>

        <Link href="mailto:rumidegirmenci0@gmail.com">
          <AiFillGooglePlusCircle />
        </Link>

        <Link target="_blank" href={translations.githubUrl}>
          <AiFillGithub />
        </Link>
      </div>
      <Link href="tel:+31642587180" className={`${switchText} text-center`}>
        <p className="flex justify-center items-center gap-2">
          <BsTelephoneFill /> 06 42 587 180
        </p>
      </Link>
    </footer>
  );
};

export default Footer;
