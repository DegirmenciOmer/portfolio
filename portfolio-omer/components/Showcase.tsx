import React, { FC, Dispatch, SetStateAction } from "react";
import { useAppContext } from "../context/AppContext";
import { translationHelper } from "../data/translationHelper";

interface TShowcaseProps {
  switchText: string;
  locale?: string | Dispatch<SetStateAction<string>>;
}

const Showcase: FC<TShowcaseProps> = ({ switchText }) => {
  const { locale } = useAppContext();
  const { translations } = translationHelper(locale);

  return (
    <section className="shadow-lg px-5 py-8 text-center">
      <img
        className="mx-auto rounded-full w-1/3 my-5"
        src="/images/profile.png"
        alt="profile"
      />
      <h2 className="text-4xl py-2 text-teal-600 font-medium">
        {translations.ownerName}
      </h2>
      <h3 className={`text-2xl ${switchText} py-2 pb-8`}>
        {translations.occupationText}
      </h3>
      <p className={`text-md py-2 leading-8 ${switchText}`}>
        {translations.briefDescription}
      </p>
    </section>
  );
};

export default Showcase;
