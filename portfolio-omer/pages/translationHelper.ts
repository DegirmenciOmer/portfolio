export const translationHelper = (language: string) => {
  const NL = language === "NL";

  return {
    translations: {
      title: NL ? "Omer's Portfeulle" : "Omer's Portfolio",
      ownerName: "Omer Degirmenci",
      sourceText: NL ? "Broncode" : "Source",
      demoText: "Demo",
      occupationText: NL
        ? "Frontend Webontwikkelaar"
        : "Frontend Web Developer",
      briefDescription: NL
        ? "Zeer gemotiveerde en zorgzame webontwikkelaar met grote vastberadenheid om te leren, te groeien en dingen voor elkaar te krijgen. Na 7 jaar als docent Engels voor jongvolwassenen te hebben gewerkt, verhuisde ik naar NL en kreeg ik de kans om inzicht te krijgen in de grote wereld van technologie en het oplossen van problemen waar ik nu een passie voor heb. Sinds maart 2020 codeer ik als dagelijkse routine, waarvan de laatste zes maanden als stagiair frontend developer"
        : "Highly motivated and caring web developer with great determination to learn, grow and get things done. After 7 years of working as an English language teacher for young adults, I moved to NL and had the opportunity to get insights into the great world of tech and problem solving which I’m now passionate about. I have been coding as a daily routine since March 2020, including the last six months as an intern frontend developer",
      text1: NL ? "Consulting" : "Overleg plegen",
      skillsTitle: NL ? "Technologieën die ik gebruik" : "Technologies I use",
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
        {
          id: "1",
          name: "Shopify Headless CMS Bath Bombs Webshop",
          demoUrl: "https://shopify-bath-bombs.netlify.app/",
          sourceUrl:
            "https://github.com/DegirmenciOmer/react-shopify-custom-storefront/tree/main/shopify-storefront",
        },
        {
          id: "2",
          name: "Shopify organicpro.nl Webshop",
          sourceUrl: "",
          demoUrl: "https://www.organicpro.nl",
        },
        {
          id: "3",
          name: "Dev Blog",
          sourceUrl: "https://github.com/DegirmenciOmer/NextJs-Blog-Project",
          demoUrl: "https://next-js-blog-project-pi.vercel.app/",
        },
        {
          id: "4",
          name: "Chat App",
          sourceUrl: "https://github.com/DegirmenciOmer/Chat-App",
          demoUrl: "https://fun-chat-omer.netlify.app/",
        },
        {
          id: "5",
          name: "Todo App",
          sourceUrl: "https://github.com/DegirmenciOmer/PERN-Stack-Todo-App",
          demoUrl: "https://pern-todo-omer.netlify.app/",
        },
        {
          id: "6",
          name: "Star Wars (SWAPI)",
          sourceUrl: "https://github.com/DegirmenciOmer/SWAPI-Project",
          demoUrl: "https://starwars-react-app.netlify.app/",
        },
        {
          id: "7",
          name: "Income & Expense Tracker",
          sourceUrl: "https://github.com/DegirmenciOmer/React-expense-tracker",
          demoUrl: "https://expensetracker-omer.netlify.app/",
        },
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
      ],
    },
  };
};
