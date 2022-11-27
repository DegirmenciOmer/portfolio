export const translationHelper = (language: string) => {
  const NL = language === "NL";

  return {
    translations: {
      title: NL ? "Omer's Portfeulle" : "Omer's Portfolio",
      occupationText: NL
        ? "Frontend Webontwikkelaar"
        : "Frontend Web Developer",
      briefDescription: NL
        ? "Zeer gemotiveerde en zorgzame webontwikkelaar met grote vastberadenheid om te leren, te groeien en dingen voor elkaar te krijgen. Na 7 jaar als docent Engels voor jongvolwassenen te hebben gewerkt, verhuisde ik naar NL en kreeg ik de kans om inzicht te krijgen in de grote wereld van technologie en het oplossen van problemen waar ik nu een passie voor heb. Sinds maart 2020 codeer ik als dagelijkse routine, waarvan de laatste zes maanden als stagiair frontend developer"
        : "Highly motivated and caring web developer with great determination to learn, grow and get things done. After 7 years of working as an English language teacher for young adults, I moved to NL and had the opportunity to get insights into the great world of tech and problem solving which I’m now passionate about. I have been coding as a daily routine since March 2020, including the last six months as an intern frontend developer",
      text1: NL ? "Consulting" : "Overleg plegen",
      text2: NL ? "" : "",
      text3: NL ? "" : "",
      skillsTitle: NL ? "Technologieën die ik gebruik" : "Technlogies I use",
      skills: [
        { id: "1", name: "HTML" },
        { id: "2", name: "CSS" },
        { id: "3", name: "Javascript" },
        { id: "4", name: "Typescript" },
        { id: "5", name: "React" },
        { id: "6", name: "GraphQL" },
        { id: "7", name: "MongoDB" },
        { id: "8", name: "Git" },
        { id: "9", name: "NextJS" },
        { id: "10", name: "Strapi CMS" },
      ],
      projectsTitle: NL ? "Projecten" : "Projects",
      projects: [
        { id: "1", name: "Shopify Headless CMS Bath Bombs Webshop" },
        { id: "2", name: "Shopify organicpro.nl Webshop" },
        { id: "3", name: "Dev Blog" },
        { id: "4", name: "Chat App" },
        { id: "5", name: "Star Wars (SWAPI)" },
        { id: "6", name: "Income & Expense Tracker" },
        { id: "7", name: "i-help" },
      ],
      experienceTitle: NL ? "Ervaring" : "Experience",
      experience: [
        {
          id: "1",
          role: NL ? "" : "",
          company: "Shopify Headless CMS Bath Bombs Webshop",
        },
        {
          id: "2",
          role: NL ? "" : "",
          company: "Shopify organicpro.nl Webshop",
        },
        {
          id: "3",
          role: NL ? "Frontend Webontwikkelaar" : "Frontend Web Developer",
          company: "Sytem4, Uden",
        },
        { id: "4", role: NL ? "" : "", company: "Chat App" },
        { id: "5", role: NL ? "" : "", company: "Star Wars (SWAPI)" },
        { id: "6", role: NL ? "" : "", company: "Income & Expense Tracker" },
        { id: "7", role: NL ? "" : "", company: "i-help" },
      ],
    },
  };
};
