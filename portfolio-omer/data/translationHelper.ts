import {
  SiAngular,
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiDocker,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMaterialui,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPm2,
  SiPostgresql,
  SiReact,
  SiSass,
  SiShopify,
  SiStorybook,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from 'react-icons/si'
// import { Tskill } from '../components/Skills'

type TSkill = {
  id: string
  name: string
  img: string
}

type TTechnology = {
  id: string
  name: string
  img: string
  Icon?: any // Optional icon type if available
}

export type TProject = {
  id: string
  name: string
  sourceUrl?: string
  demo_url?: string
  live_url?: string
  img: string
  locale?: string
  description_en: string[]
  description_nl: string[]
  technologies: TTechnology[] // Array of TTechnology type
}

export type TExperience = {
  id: string
  role: string
  company: string
  date: string
}

type TPortfolioData = {
  translations: {
    title: string
    ownerName: string
    seeText: string
    sourceText: string
    demoText: string
    liveText: string
    techTitle: string
    occupationText: string
    briefDescription: string[]
    contactTitle: string
    experienceTitle: string
    text1: string
    experiences: TExperience[]
    skills: TSkill[]
    githubUrl: string
    linkedinUrl: string
    projectsTitle: string
    gmail: string
    skillsTitle: string
  }
}

export const translationHelper = (language: string): TPortfolioData => {
  const NL = language === 'nl'

  return {
    translations: {
      title: NL ? "Omer's Portfeulle" : "Omer's Portfolio",
      ownerName: 'Omer Degirmenci',
      seeText: NL ? 'Zie' : 'See',
      sourceText: 'Code',
      demoText: 'Demo',
      liveText: 'Live Site',
      techTitle: NL ? 'Technologieën' : 'Technologies',
      occupationText: NL
        ? 'Frontend Webontwikkelaar'
        : 'Frontend Web Developer',
      briefDescription: NL
        ? [
            'Als zeer gemotiveerde en zorgzame webontwikkelaar ben ik vastbesloten om voortdurend te leren, te groeien en resultaten te behalen.',
            'Na zeven jaar als docent Engels voor jongvolwassenen te hebben gewerkt, verhuisde ik naar Nederland en kreeg ik de kans om de brede wereld van technologie en probleemoplossing te verkennen, waar ik een passie voor heb ontwikkeld. Sinds maart 2020 is coderen een dagelijkse routine voor mij geworden.',
            "Ik ben altijd op zoek naar nieuwe uitdagingen en enthousiast om bij te dragen aan innovatieve projecten. Ik ben een teamspeler, met sterke communicatieve vaardigheden, en ik kan effectief samenwerken met collega's om gemeenschappelijke doelen te bereiken.",
            'Ik blijf mezelf voortdurend verbeteren en op de hoogte van nieuwe technologieën en trends in webontwikkeling. Ik geloof dat ik door voortdurend te leren waardevolle bijdragen kan leveren en mezelf kan blijven ontwikkelen als een competente webontwikkelaar.',
          ]
        : [
            'I am a highly motivated and caring web developer with a strong determination to learn, grow, and get things done. ',
            'After working as an English teacher for young adults for seven years, I made the move to the Netherlands and had the opportunity to delve into the vast world of technology and problem-solving, which I have developed a passion for. Since March 2020, coding has become a daily routine for me. ',
            'I am always seeking new challenges and excited to contribute to innovative projects. I am a team player, with strong communication skills, and I am able to collaborate effectively with colleagues to achieve common goals. ',
            'I continuously strive to improve myself and stay updated with new technologies and trends in web development. I believe that by constantly learning, I can make valuable contributions and continue to evolve as a competent web developer. ',
          ],

      text1: NL ? 'Consulting' : 'Overleg plegen',
      contactTitle: 'Contact',
      githubUrl: 'https://github.com/DegirmenciOmer',
      linkedinUrl: 'https://www.linkedin.com/in/omer-degirmenci-5777051b9',
      gmail: 'http://github.com/DegirmenciOmer',
      skillsTitle: NL ? 'Technologieën' : 'Technologies',
      skills: [
        {
          id: '1',
          name: 'Javascript',
          img: '/images/skills/js.png',
        },
        {
          id: '2',
          name: 'Typescript',
          img: '/images/skills/ts_logo.png',
        },
        {
          id: '3',
          name: 'React',
          img: '/images/skills/react.png',
        },
        {
          id: '4',
          name: 'NextJS',
          img: '/images/skills/next.png',
        },
        {
          id: '5',
          name: 'NodeJS',
          img: '/images/skills/nodejs.png',
        },
        {
          id: '6',
          name: 'CSS',
          img: '/images/skills/css.png',
        },
        {
          id: '8',
          name: 'HTML',
          img: '/images/skills/html.png',
        },
        {
          id: '9',
          name: 'Git',
          img: '/images/skills/git.png',
        },
        {
          id: '12',
          name: 'Strapi',
          img: '/images/skills/strapi.png',
        },
        {
          id: '14',
          name: 'Sass',
          img: '/images/skills/sass-logo.svg',
        },
        {
          id: '15',
          name: 'Shopify',
          img: '/images/skills/shopify.svg',
        },
      ],
      projectsTitle: NL ? 'Projecten' : 'Projects',
      experienceTitle: NL ? 'Ervaring' : 'Experience',
      experiences: [
        {
          id: '1',
          role: NL ? 'Leraar Engels' : 'English Teacher',
          company: 'Ministry of Education, Ankara',
          date: '2011-2018',
        },
        {
          id: '2',
          role: NL ? 'Leraar Engels' : 'English Teacher',
          company: 'Kultur Private Schools, Ankara',
          date: '2018',
        },

        {
          id: '3',
          role: NL ? 'Vrijwillige Leraar Engels' : 'English Teacher Volunteer',
          company: 'Paplos American Language Center,  Athens',
          date: '2019',
        },
        {
          id: '4',
          role: NL
            ? 'Stagiaire Frontend Webontwikkelaar'
            : 'Intern Frontend Web Developer',
          company: 'System4, Uden',
          date: NL ? 'jan 2022-jul 2022 ' : 'Jan 2022 - Jul 2022',
        },
        {
          id: '5',
          role: NL ? 'Frontend Webontwikkelaar' : 'Frontend Web Developer',
          company: 'System4, Uden',
          date: NL ? 'jul 2022 - dec 2022' : 'Jul 2022 - Dec 2022',
        },
        {
          id: '6',
          role: NL ? 'Frontend Webontwikkelaar' : 'Frontend Web Developer',
          company: 'Advacom, Geleen',
          date: NL ? 'jul 2023 - Momenteel' : 'Jul 2023 - Currently',
        },
      ],
    },
  }
}
