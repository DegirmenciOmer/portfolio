export const translationHelper = (language: string) => {
  const NL = language === "NL";

  return {
    translations: {
      title: NL ? "Omer's Portfeulle" : "Omer's Portfolio",
      ownerName: "Omer Degirmenci",
      sourceText: "Code",
      demoText: "Demo",
      liveText: "Live Site",
      occupationText: NL
        ? "Frontend Webontwikkelaar"
        : "Frontend Web Developer",
      briefDescription: NL
        ? "Zeer gemotiveerde en zorgzame webontwikkelaar met grote vastberadenheid om te leren, te groeien en dingen voor elkaar te krijgen. Na 7 jaar als docent Engels voor jongvolwassenen te hebben gewerkt, verhuisde ik naar NL en kreeg ik de kans om inzicht te krijgen in de grote wereld van technologie en het oplossen van problemen waar ik nu een passie voor heb. Sinds maart 2020 codeer ik als dagelijkse routine, waarvan de laatste een jaar als frontend developer bij System4."
        : "Highly motivated and caring web developer with great determination to learn, grow and get things done. After 7 years of working as an English language teacher for young adults, I moved to NL and had the opportunity to get insights into the great world of tech and problem solving which I’m now passionate about. I have been coding as a daily routine since March 2020, including the last one year as a Frontend Developer  at System4.        ",
      text1: NL ? "Consulting" : "Overleg plegen",
      contactTitle: "Contact",
      githubUrl: "https://github.com/DegirmenciOmer",
      linkedinUrl: "https://www.linkedin.com/in/omer-degirmenci-5777051b9",
      gmail: "http://github.com/DegirmenciOmer",
      skillsTitle: NL ? "Technologieën die ik gebruik" : "Technologies I use",
      skills: [
        { id: "1", name: "HTML" },
        { id: "2", name: "CSS" },
        { id: "3", name: "Git" },
        { id: "4", name: "Javascript" },
        { id: "5", name: "Typescript" },
        { id: "6", name: "React" },
        { id: "7", name: "NextJS" },
        { id: "8", name: "Storybook" },
        { id: "9", name: "GraphQL" },
        { id: "10", name: "MongoDB" },
        { id: "11", name: "Strapi CMS" },
        { id: "12", name: "Angular" },
      ],
      projectsTitle: NL ? "Projecten" : "Projects",
      projects: [
        {
          id: "1",
          name: "Income & Expense Tracker",
          sourceUrl: "https://github.com/DegirmenciOmer/React-expense-tracker",
          description: "My first React project",
          demoUrl: "https://expensetracker-omer.netlify.app/",
        },
        {
          id: "2",
          name: "Star Wars (SWAPI)",
          sourceUrl: "https://github.com/DegirmenciOmer/SWAPI-Project",
          description: "project description",
          demoUrl: "https://starwars-react-app.netlify.app/",
        },
        {
          id: "3",
          name: "Todo App",
          sourceUrl: "https://github.com/DegirmenciOmer/PERN-Stack-Todo-App",
          description: "project description",
          demoUrl: "https://pern-todo-omer.netlify.app/",
        },
        {
          id: "4",
          name: "Chat App",
          sourceUrl: "https://github.com/DegirmenciOmer/Chat-App",
          description: "project description",
          demoUrl: "https://fun-chat-omer.netlify.app/",
        },
        {
          id: "5",
          name: "Dev Blog",
          sourceUrl: "https://github.com/DegirmenciOmer/NextJs-Blog-Project",
          description: "project description",
          demoUrl: "https://next-js-blog-project-pi.vercel.app/",
        },
        {
          id: "6",
          name: "Shopify organicpro.nl Webshop",
          sourceUrl: "",
          description: "project description",
          demoUrl: "https://www.organicpro.nl",
        },
        {
          id: "7",
          name: "Shopify Headless CMS Bath Bombs Webshop",
          demoUrl: "https://shopify-bath-bombs.netlify.app/",
          sourceUrl:
            "https://github.com/DegirmenciOmer/react-shopify-custom-storefront/tree/main/shopify-storefront",
          description: "project description",
        },
        {
          id: "8",
          name: "Kwynt (System4)",
          demoUrl: "",
          sourceUrl: "",
          description: "project description",
        },
        {
          id: "9",
          name: "Admin Theme (System4)",
          demoUrl: "",
          sourceUrl: "",
          description: "project description",
        },
        {
          id: "10",
          name: "Online Hearing Aids (System4)",
          demoUrl: "",
          liveUrl: "https://online-hearingaids.com/",
          sourceUrl: "",
          description: "project description",
        },
        {
          id: "11",
          name: "My Pump (System4)",
          liveUrl: "https://mypump.nl/",
          demoUrl: "",
          sourceUrl: "",
          description: "project description",
        },
      ],
      experienceTitle: NL ? "Ervaring" : "Experience",
      experience: [
        {
          id: "1",
          role: NL ? "Leraar Engels" : "English Teacher",
          company: "Ministry of Education, Ankara",
          date: "2011-2018",
        },
        {
          id: "2",
          role: NL ? "Leraar Engels" : "English Teacher",
          company: "Kultur Private Schools, Ankara",
          date: "2018",
        },

        {
          id: "3",
          role: NL ? "Vrijwillige Leraar Engels" : "English Teacher Volunteer",
          company: "Paplos American Language Center,  Athens",
          date: "2019",
        },
        {
          id: "4",
          role: NL
            ? "Stagiaire Frontend Webontwikkelaar"
            : "Intern Frontend Web Developer",
          company: "System4, Uden",
          date: NL ? "jan 2022-jul 2022 " : "Jan 2022 - Jul 2022",
        },
        {
          id: "5",
          role: NL ? "Frontend Webontwikkelaar" : "Frontend Web Developer",
          company: "System4, Uden",
          date: NL ? "jul 2022 - Momenteel" : "Jul 2022 - Current",
        },
      ],
    },
  };
};
