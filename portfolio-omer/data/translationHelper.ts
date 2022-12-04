import { Dispatch, SetStateAction } from "react";
export const translationHelper = (language: any) => {
  const NL = language === "nl";

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
          id: "0",
          name: "Income & Expense Tracker",
          sourceUrl: "https://github.com/DegirmenciOmer/React-expense-tracker",
          technologies: ["react", "react hooks"],
          locale: "nl",
          description: [
            "Mijn eerst React project waarin I used react hooks (useState, useContext, useReducer) and the context API.",
          ],
          demoUrl: "https://expensetracker-omer.netlify.app/",
        },
        {
          locale: "nl",
          id: "1",
          name: "Star Wars (SWAPI)",
          sourceUrl: "https://github.com/DegirmenciOmer/SWAPI-Project",
          description: [
            "A web app that uses the Star wars API (SWAPI) to display list of films and some other features about the StarWars universe.",
            "The app renders a UI that displays all the related movies.",
            "User can enter character name into search box and see filtered list of characters.",
            "No list displayed until <= 3 characters in search bar.",
          ],
          demoUrl: "https://starwars-react-app.netlify.app/",
        },
        {
          locale: "nl",
          id: "2",
          name: "Todo App",
          sourceUrl: "https://github.com/DegirmenciOmer/PERN-Stack-Todo-App",
          technologies: [
            "NodeJS",
            "Express",
            "React",
            "Bootstrap",
            "PostgreSQL",
          ],
          description: [
            "A basic todo app which has create, update, and delete features.",
            "The app might not be working as expected anymore since the backend deployment service Heroku has updated its deploy policy",
          ],
          demoUrl: "https://pern-todo-omer.netlify.app/",
        },
        {
          locale: "nl",
          id: "3",
          name: "Chat App",
          sourceUrl: "https://github.com/DegirmenciOmer/Chat-App",
          technologies: [
            "NodeJS",
            "Express",
            "Socket.io",
            "React",
            "React Bootstrap",
          ],
          description: [
            "A chat application which can be used not only for private messaging, but also as a group chat.",
            "It doesn't require a phone number, you can generate a unique ID instead to get started with the application. ",
            "All you need to do is add your friends into your contact list with their IDs and enjoy this cool chat! 😎",
            "The app might not be working as expected anymore since the backend deployment service Heroku has updated its deploy policy",
          ],
          demoUrl: "https://fun-chat-omer.netlify.app/",
        },
        {
          locale: "nl",
          id: "4",
          name: "Dev Blog",
          sourceUrl: "https://github.com/DegirmenciOmer/NextJs-Blog-Project",
          technologies: ["react", "react hooks"],
          description: [
            "A NextJS blog application",
            "Could be reused easily to generate an awesome static website with markdown.",
          ],
          demoUrl: "https://next-js-blog-project-pi.vercel.app/",
        },
        {
          locale: "nl",
          id: "5",
          name: "Shopify organicpro.nl Webshop",
          sourceUrl: "",
          technologies: ["Shopify CMS", "Theme Development", "Liquid"],
          description: [
            "I contributed to this project in terms of theme development",
          ],
          demoUrl: "https://www.organicpro.nl",
        },
        {
          id: "6",
          locale: "nl",
          name: "Shopify Headless CMS Bath Bombs Webshop",
          demoUrl: "https://shopify-bath-bombs.netlify.app/",
          sourceUrl:
            "https://github.com/DegirmenciOmer/react-shopify-custom-storefront/tree/main/shopify-storefront",
          technologies: ["react", "Chakra UI", "Shopify CMS"],
          description: ["A webshop example using Shopify Headless CMS"],
        },
        {
          id: "7",
          locale: "nl",
          name: "Kwynt (System4)",
          demoUrl: "",
          sourceUrl: "",
          technologies: [
            "React",
            "Typescript",
            "NextJS",
            "Strapi CMS",
            "Material UI",
            "Docker",
          ],
          description: [
            "I was busy With this awesome investment project throughout my internship at System4.",
            "I implemented translations both in Strapi and in frontend",
            "I built FAQ pages",
            "I made connection with Jira API and Management Dashboard App and then provided with  autogenerating report for the customer to follow the activities of the dev team",
            "The project deployment was unfortunately suspended",
          ],
        },
        {
          id: "8",
          locale: "nl",
          name: "Admin Theme (System4)",
          demoUrl: "",
          sourceUrl: "",
          technologies: [
            "Javascript",
            "React",
            "Typescript",
            "Angular",
            "Storybook",
            "Tailwind CSS",
          ],
          description: [
            "The purpose of the project is to build an admin UI to make life easier for the frontend developers",
            "Along with implementing some of the designs of the components by using Vanilla Javascript, Tailwind, and Storybook, I was basically responsible for the implementation of these components in React and Angular",
          ],
        },
        {
          id: "9",
          name: "Online Hearing Aids (System4)",
          locale: "nl",
          demoUrl: "",
          liveUrl: "https://online-hearingaids.com/",
          sourceUrl: "",
          technologies: ["Wordpress"],
          description: [
            "I supported the dev team in terms of responsive stying and content management",
          ],
        },
        {
          id: "10",
          name: "My Pump (System4)",
          locale: "nl",
          liveUrl: "https://mypump.nl/",
          demoUrl: "",
          sourceUrl: "",
          technologies: ["NextJS, Postgres, PM2"],
          description: [
            "I maintained the frontend implementations as well as editing some database issues requested by the customers.",
          ],
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
