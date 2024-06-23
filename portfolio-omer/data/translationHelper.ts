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
  SiPm2,
  SiPostgresql,
  SiReact,
  SiShopify,
  SiSocketdotio,
  SiStorybook,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from 'react-icons/si'

export const translationHelper = (language: any) => {
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
        ? "Als zeer gemotiveerde en zorgzame webontwikkelaar ben ik vastbesloten om voortdurend te leren, te groeien en resultaten te behalen. Na zeven jaar als docent Engels voor jongvolwassenen te hebben gewerkt, besloot ik naar Nederland te verhuizen en kreeg ik de kans om de opwindende wereld van technologie en probleemoplossing te verkennen, waar ik nu een passie voor heb ontwikkeld. Sinds maart 2020 is coderen een dagelijkse routine voor mij geworden.  Ik geniet ervan om boeiende en gebruiksvriendelijke webapplicaties te creëren die aan de behoeften van gebruikers voldoen. Ik ben altijd op zoek naar nieuwe uitdagingen en ik ben enthousiast om bij te dragen aan innovatieve projecten. Ik ben een teamspeler, communicatief sterk en in staat om effectief samen te werken met collega's om gemeenschappelijke doelen te bereiken. Ik blijf mezelf voortdurend verbeteren en ben altijd op zoek naar nieuwe technologieën en trends in de webontwikkeling. Ik geloof dat door voortdurend te blijven leren, ik waardevolle bijdragen kan leveren en mezelf kan blijven ontwikkelen als een competente webontwikkelaar."
        : 'I am a highly motivated and caring web developer with a strong determination to learn, grow, and get things done. After working as an English teacher for young adults for seven years, I made the move to the Netherlands and had the opportunity to delve into the vast world of technology and problem-solving, which I have developed a passion for. Since March 2020, coding has become a daily routine for me. I enjoy creating engaging and user-friendly web applications that meet the needs of users. \n  I am always seeking new challenges and excited to contribute to innovative projects. I am a team player, with strong communication skills, and I am able to collaborate effectively with colleagues to achieve common goals. \n I continuously strive to improve myself and stay updated with new technologies and trends in web development. I believe that by constantly learning, I can make valuable contributions and continue to evolve as a competent web developer.',
      text1: NL ? 'Consulting' : 'Overleg plegen',
      contactTitle: 'Contact',
      githubUrl: 'https://github.com/DegirmenciOmer',
      linkedinUrl: 'https://www.linkedin.com/in/omer-degirmenci-5777051b9',
      gmail: 'http://github.com/DegirmenciOmer',
      skillsTitle: NL ? 'Technologieën die ik gebruik' : 'Technologies I use',
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
          id: '7',
          name: 'MongoDB',
          img: '/images/skills/mongodb.png',
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
          id: '10',
          name: 'Storybook',
          img: '/images/skills/storybook.png',
        },
        // {
        //   id: '11',
        //   name: 'GraphQL',
        //   img: '/images/skills/graphql.png',
        // },
        {
          id: '12',
          name: 'Strapi',
          img: '/images/skills/strapi.png',
        },
        {
          id: '13',
          name: 'Angular',
          img: '/images/skills/angular.png',
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
      projects: [
        {
          id: '0',
          name: 'Income & Expense Tracker',
          sourceUrl: 'https://github.com/DegirmenciOmer/React-expense-tracker',
          technologies: [
            {
              id: '1',
              name: 'React',
              img: '/images/skills/react.png',
              Icon: SiReact,
            },
            {
              id: '2',
              Icon: SiJavascript,
              name: 'Javascript',
              img: '/images/skills/js.png',
            },
          ],
          locale: 'nl',
          descriptionEN: [
            'My first React project waarin gebruikt React hooks (useState, useContext, useReducer) and the context API.',
          ],
          descriptionNL: [
            'Mijn eerst React project waarin I used react hooks (useState, useContext, useReducer) and the context API.',
          ],
          demoUrl: 'https://expensetracker-omer.netlify.app/',
          img: '/images/expense.PNG',
        },
        {
          locale: 'nl',
          id: '1',
          name: 'Star Wars (SWAPI)',
          sourceUrl: 'https://github.com/DegirmenciOmer/SWAPI-Project',
          descriptionNL: [
            'Een webapp die de Star Wars API (SWAPI) gebruikt om een lijst met films en enkele andere functies over het StarWars-universum weer te geven.',
            'De app geeft een gebruikersinterface weer die alle gerelateerde films weergeeft.',
            'Gebruiker kan karakternaam invoeren in zoekvak en gefilterde lijst met karakters zien.',
            'Geen lijst getoond tot <= 3 karakters in zoekbalk.',
          ],
          descriptionEN: [
            'A web app that uses the Star wars API (SWAPI) to display list of films and some other features about the StarWars universe.',
            'The app renders a UI that displays all the related movies.',
            'User can enter character name into search box and see filtered list of characters.',
            'No list displayed until <= 3 characters in search bar.',
          ],
          demoUrl: 'https://starwars-react-app.netlify.app/',
          technologies: [
            {
              id: '1',
              name: 'React',
              Icon: SiReact,
              img: '/images/skills/react.png',
            },
            {
              id: '2',
              Icon: SiJavascript,
              name: 'javascript',
              img: '/images/skills/js.png',
            },
          ],
          img: '/images/swapi.PNG',
        },
        {
          locale: 'nl',
          id: '2',
          name: 'Todo App',
          sourceUrl: 'https://github.com/DegirmenciOmer/PERN-Stack-Todo-App',
          technologies: [
            {
              id: '1',
              name: 'NodeJS',
              img: '/images/skills/nodejs.png',
              Icon: SiNodedotjs,
            },
            {
              id: '2',
              name: 'Express',
              img: '/images/skills/express.png',
              Icon: SiExpress,
            },
            {
              id: '3',
              name: 'React',
              Icon: SiReact,
              img: '/images/skills/react.png',
            },
            {
              id: '4',
              name: 'Bootstrap',
              img: '/images/skills/bootstrap.png',
              Icon: SiBootstrap,
            },
            {
              id: '5',
              name: 'PostgreSQL',
              Icon: SiPostgresql,
              img: '/images/skills/postgresql.png',
            },
          ],
          descriptionNL: [
            'Een eenvoudige todo-app met functies voor maken, bijwerken en verwijderen.',
          ],
          descriptionEN: [
            'A basic todo app which has create, update, and delete features.',
          ],
          demoUrl: 'https://pern-todo-omer.netlify.app/',
          img: '/images/todo.png',
        },
        {
          locale: 'nl',
          id: '3',
          name: 'Advacom Tech Assignment',
          liveUrl: 'https://limburgsport.netlify.app/',
          demoUrl: '',
          img: '/images/advacom-opdracht.JPG',
          sourceUrl: 'https://github.com/DegirmenciOmer/advacom-opdracht',
          technologies: [
            {
              id: '1',
              name: 'HTML',
              Icon: SiHtml5,
              img: '/images/skills/html.png',
            },
            {
              id: '2',
              Icon: SiCss3,
              name: 'CSS',
              img: '/images/skills/css.png',
            },
            {
              id: '3',
              Icon: SiJquery,
              name: 'Jquery',
              img: '/images/skills/js.png',
            },
          ],
          descriptionNL: [
            'I was ecstatic when I was offered a job opportunity after delivering an outstanding performance on a challenging technical assignment. Working on this project allowed me to refine and enhance my fundamental frontend skills. I believe that the level of dedication and effort I invested in this task warrants its inclusion as a valuable portfolio piece!',
          ],
          descriptionEN: [
            'Ik was ontzettend blij toen ik werd aangenomen na het leveren van een uitstekende prestatie op een veeleisende technische opdracht. Het werken aan dit project heeft mijn basisvaardigheden op het gebied van frontend-ontwikkeling scherp gesteld. Ik ben ervan overtuigd dat de toewijding en inzet die ik in deze opdracht heb gestoken, rechtvaardigt dat het een waardevol onderdeel van mijn portfolio wordt!',
          ],
        },

        // {
        //   locale: 'nl',
        //   id: '3',
        //   name: 'Chat App',
        //   sourceUrl: 'https://github.com/DegirmenciOmer/Chat-App',
        //   technologies: [
        //     {
        //       id: '1',
        //       name: 'NodeJS',
        //       Icon: SiNodedotjs,
        //       img: '/images/skills/nodejs.png',
        //     },
        //     {
        //       id: '2',
        //       name: 'Express',
        //       img: '/images/skills/express.png',
        //       Icon: SiExpress,
        //     },
        //     {
        //       id: '3',
        //       name: 'Socket.io',
        //       img: '/images/skills/socket.png',
        //       Icon: SiSocketdotio,
        //     },
        //     {
        //       id: '4',
        //       name: 'React',
        //       Icon: SiReact,
        //       img: '/images/skills/react.png',
        //     },
        //     {
        //       id: '5',
        //       name: 'React Bootstrap',
        //       Icon: SiBootstrap,
        //       img: '/images/skills/rbootstrap.png',
        //     },
        //   ],
        //   descriptionNL: [
        //     'Een chatapplicatie die niet alleen kan worden gebruikt voor privéberichten, maar ook als groepschat.',
        //     'Het vereist geen telefoonnummer,je kunt in plaats daarvan een uniek ID genereren om aan de slag te gaan met de applicatie. ',
        //     "Het enige wat je hoeft te doen is je vrienden met hun ID's aan je contactenlijst toe te voegen en te genieten van deze coole chat! 😎",
        //   ],
        //   descriptionEN: [
        //     'A chat application which can be used not only for private messaging, but also as a group chat.',
        //     "It doesn't require a phone number, you can generate a unique ID instead to get started with the application. ",
        //     'All you need to do is add your friends into your contact list with their IDs and enjoy this cool chat! 😎',
        //   ],
        //   demoUrl: 'https://fun-chat-omer.netlify.app/',
        //   img: '/images/chat.jpg',
        // },
        {
          locale: 'nl',
          id: '4',
          name: 'Dev Blog',
          sourceUrl: 'https://github.com/DegirmenciOmer/NextJs-Blog-Project',
          technologies: [
            {
              id: '1',
              name: 'NodeJS',
              Icon: SiNodedotjs,
              img: '/images/skills/nodejs.png',
            },
            {
              id: '2',
              name: 'NextJS',
              Icon: SiNextdotjs,
              img: '/images/skills/next.png',
            },
            {
              id: '3',
              name: 'React',
              Icon: SiReact,
              img: '/images/skills/react.png',
            },
            {
              id: '4',
              name: 'React Bootstrap',
              Icon: SiBootstrap,
              img: '/images/skills/rbootstrap.png',
            },
          ],
          descriptionNL: [
            'Een NextJS-blogapplicatie',
            'Kan gemakkelijk worden hergebruikt om een geweldige statische website te maken met korting.',
          ],
          descriptionEN: [
            'A NextJS blog application',
            'Could be reused easily to generate an awesome static website with markdown.',
          ],
          demoUrl: 'https://next-js-blog-project-pi.vercel.app/',
          img: '/images/devblog.PNG',
        },
        {
          locale: 'nl',
          id: '5',
          name: 'Shopify organicpro.nl Webshop',
          sourceUrl: '',
          technologies: [
            {
              id: '1',
              name: 'Shopify5',
              img: '/images/skills/shopify.png',
              Icon: SiShopify,
            },
            {
              id: '2',
              Icon: SiShopify,
              name: 'Theme Development',
              img: '/images/skills/shopify.png',
            },
          ],
          descriptionNL: [
            'Ik heb bijgedragen aan dit project op het gebied van thema-ontwikkeling',
          ],
          descriptionEN: [
            'I contributed to this project in terms of theme development',
          ],
          liveUrl: 'https://www.organicpro.nl',
          img: '/images/shopify.jpg',
        },
        {
          id: '6',
          locale: 'nl',
          name: 'Shopify Headless CMS Bath Bombs Webshop',
          demoUrl: 'https://shopify-bath-bombs.netlify.app/',
          img: '/images/bath-bombs.PNG',
          sourceUrl:
            'https://github.com/DegirmenciOmer/react-shopify-custom-storefront/tree/main/shopify-storefront',
          technologies: [
            {
              id: '1',
              name: 'React',
              Icon: SiReact,
              img: '/images/skills/react.png',
            },
            {
              id: '2',
              name: 'Shopify5',
              img: '/images/skills/shopify.png',
              Icon: SiShopify,
            },
            {
              id: '3',
              name: 'Chakra UI',
              img: '/images/skills/chakra.png',
              Icon: SiChakraui,
            },
          ],
          descriptionNL: [
            'Een voorbeeld van een webshop met Shopify Headless CMS',
          ],
          descriptionEN: ['A webshop example using Shopify Headless CMS'],
        },
        {
          id: '7',
          locale: 'nl',
          name: 'Kwynt (System4)',
          demoUrl: '',
          img: '/images/system4.jpg',
          sourceUrl: '',
          technologies: [
            {
              id: '1',
              name: 'Typescript',
              Icon: SiTypescript,
              img: '/images/skills/typescript.png',
            },
            {
              id: '2',
              name: 'Express',
              img: '/images/skills/express.png',
              Icon: SiExpress,
            },
            {
              id: '3',
              name: 'Strapi',
              Icon: SiStrapi,
              img: '/images/skills/strapi.png',
            },
            {
              id: '4',
              name: 'React',
              Icon: SiReact,
              img: '/images/skills/react.png',
            },
            {
              id: '5',
              name: 'Material UI',
              img: '/images/skills/mui.png',
              Icon: SiMaterialui,
            },
            {
              id: '6',
              Icon: SiDocker,
              name: 'Docker',
              img: '/images/skills/docker.png',
            },
          ],
          descriptionNL: [
            'Ik was bezig met dit geweldige investeringsproject tijdens mijn stage bij System4.',
            'Ik implementeerde vertalingen zowel in Strapi als in frontend',
            "Ik heb FAQ-pagina's gebouwd",
            'Ik heb verbinding gemaakt met Jira API en Management Dashboard App en vervolgens voorzien van een automatisch genererend rapport voor de klant om de activiteiten van het ontwikkelteam te volgen',
            'De projectimplementatie is helaas opgeschort',
          ],
          descriptionEN: [
            'I was busy with this awesome investment project throughout my internship at System4.',
            'I implemented translations both in Strapi and in frontend',
            'I built FAQ pages',
            'I made connection with Jira API and Management Dashboard App and then provided with  autogenerating report for the customer to follow the activities of the dev team',
            'The project deployment was unfortunately suspended',
          ],
        },
        {
          id: '8',
          locale: 'nl',
          name: 'Admin Theme (System4)',
          demoUrl: '',
          img: '/images/system4.jpg',
          sourceUrl: '',
          technologies: [
            {
              id: '1',
              name: 'Typescript',
              Icon: SiTypescript,
              img: '/images/skills/typescript.png',
            },
            {
              id: '2',
              name: 'Angular',
              Icon: SiAngular,
              img: '/images/skills/angular.png',
            },
            {
              id: '3',
              name: 'Tailwind',
              Icon: SiTailwindcss,
              img: '/images/skills/tailwind.svg',
            },
            {
              id: '4',
              name: 'React',
              Icon: SiReact,
              img: '/images/skills/react.png',
            },
            {
              id: '5',
              Icon: SiJavascript,
              name: 'Javascript',
              img: '/images/skills/js.png',
            },
            {
              id: '6',
              name: 'Storybook',
              Icon: SiStorybook,
              img: '/images/skills/storybook.png',
            },
          ],
          descriptionNL: [
            'Het doel van het project is om een beheerdersinterface te bouwen om het leven van de frontend-ontwikkelaars gemakkelijker te maken',
            'Naast het implementeren van enkele ontwerpen van de componenten met behulp van Vanilla Javascript, Tailwind en Storybook, was ik in principe verantwoordelijk voor de implementatie van deze componenten in React en Angular',
          ],
          descriptionEN: [
            'The purpose of the project is to build an admin UI to make life easier for the frontend developers',
            'Along with implementing some of the designs of the components by using Vanilla Javascript, Tailwind, and Storybook, I was basically responsible for the implementation of these components in React and Angular',
          ],
        },
        {
          id: '9',
          name: 'Online Hearing Aids (System4)',
          locale: 'nl',
          demoUrl: '',
          img: '/images/logo-onlinehoortoestel-nl.png',
          liveUrl: 'https://online-hearingaids.com/',
          sourceUrl: '',
          technologies: [
            {
              id: '1',
              name: 'Wordpress',
              img: '/images/skills/wordpress.png',
              Icon: SiWordpress,
            },
            {
              id: '2',
              name: 'CSS',
              Icon: SiCss3,
              img: '/images/skills/css.png',
            },
            {
              id: '3',
              Icon: SiJavascript,
              name: 'Javascript',
              img: '/images/skills/js.png',
            },
          ],
          descriptionNL: [
            'Ik ondersteunde het ontwikkelteam op het gebied van responsive styling en content management',
          ],
          descriptionEN: [
            'I supported the dev team in terms of responsive stying and content management',
          ],
        },
        {
          id: '10',
          name: 'My Pump (System4)',
          locale: 'nl',
          liveUrl: 'https://mypump.nl/',
          demoUrl: '',
          img: '/images/mypump.PNG',
          sourceUrl: '',
          technologies: [
            {
              id: '1',
              name: 'Typescript',
              Icon: SiTypescript,
              img: '/images/skills/typescript.png',
            },
            {
              id: '2',
              name: 'NextJs',
              Icon: SiNextdotjs,
              img: '/images/skills/next.png',
            },
            {
              id: '3',
              name: 'PM2',
              img: '/images/skills/react.png',
              Icon: SiPm2,
            },
          ],
          descriptionNL: [
            'Ik onderhield de frontend-implementaties en redigeerde enkele databaseproblemen die door de klanten waren aangevraagd.',
          ],
          descriptionEN: [
            'I maintained the frontend implementations as well as editing some database issues requested by the customers.',
          ],
        },
        {
          id: '11',
          name: 'Events',
          liveUrl: '',
          demoUrl: 'https://events-omer.vercel.app/',
          img: '/images/events.PNG',
          sourceUrl: 'https://github.com/DegirmenciOmer/Events',
          technologies: [
            {
              id: '1',
              name: 'Typescript',
              Icon: SiTypescript,
              img: '/images/skills/typescript.png',
            },
            {
              id: '2',
              name: 'NextJs',
              Icon: SiNextdotjs,
              img: '/images/skills/next.png',
            },
            {
              id: '3',
              name: 'Strapi',
              Icon: SiStrapi,
              img: '/images/skills/strapi.png',
            },
            {
              id: '4',
              name: 'PostgreSQL',
              Icon: SiPostgresql,
              img: '/images/skills/postgresql.png',
            },
          ],
          descriptionNL: [
            'Nog een coole fullstack Next-app vergezeld van Strapi. Hier kuntje zich registreren, inloggen, jouw eigen berichten maken (als evenementen). Als je nog niet bent ingelogd, kun je nog steeds de lijst met evenementen zien die in deze app zijn geplaatst. ',
            'BELANGRIJK: wanneerje de website voor het eerst bezoekt, zal je hoogstwaarschijnlijk foutcode 504 tegenkomen. Omdat de gratis free tier (backend-implementatieservice) stopt met het uitvoeren van de app na 30 minuten inactiviteit en deze alleen weer op verzoek start. niet gebruikt, dan duurt het een paar minuten voordat de eerste verzoeken weer actief zijn.',
            'Kortom, als je een foutcode ziet, vernieuw dan de pagina 60 sec later. Dat komt goed.',
          ],
          descriptionEN: [
            'Another cool fullstack Next App accompanied with Strapi. Here you can register, login, create your own posts (as events). If you are not logged in yet, you can still see the list of events posted in this app. ',
            "IMPORTANT: When you first visit the website, you will most probably encounter an error code 504. Because the  free tier (backend deployment service) stops running the app after 30 minutes of inactivity and only spins it back up on demand. So if it's not been used then the first requests will take a few minutes before it's up and running again.",
            'In short, if you see an error code, refresh the page 60 sec later. It will be alright.',
          ],
        },
        {
          id: '12',
          name: "Rumi's Keuken",
          liveUrl: '',
          demoUrl: 'https://rumi-keuken.vercel.app/',
          img: '/images/logo-rumi.png',
          sourceUrl: 'https://github.com/DegirmenciOmer/rumi-keuken',
          technologies: [
            {
              id: '1',
              name: 'Typescript',
              Icon: SiTypescript,
              img: '/images/skills/typescript.png',
            },
            {
              id: '2',
              Icon: SiJavascript,
              name: 'Javascript',
              img: '/images/skills/js.png',
            },
            {
              id: '3',
              name: 'NextJs',
              Icon: SiNextdotjs,
              img: '/images/skills/next.png',
            },
            {
              id: '4',
              name: 'NodeJs',
              Icon: SiNodedotjs,
              img: '/images/skills/nodejs.png',
            },
            {
              id: '5',
              name: 'Strapi',
              Icon: SiStrapi,
              img: '/images/skills/strapi.png',
            },
            {
              id: '6',
              name: 'PostgreSQL',
              Icon: SiPostgresql,
              img: '/images/skills/postgresql.png',
            },
          ],
          descriptionNL: [
            'Deze website is bijzonder omdat ik hem heb gebouwd voor mijn vrouw, die binnenkort haar eigen bedrijf start. Het heeft een gebruiksvriendelijke interface waar bezoekers moeiteloos door verschillende voedselcategorieën kunnen bladeren en producten aan hun winkelwagen kunnen toevoegen. Vervolgens kunnen ze hun bestelling verzenden, waardoor deze in onze database wordt opgeslagen met de status "in behandeling". De beheerder kan de bestelling onderzoeken en de status bijwerken totdat deze aan de klant is geleverd.',
            'Met behulp van het Strapi content management systeem (een headless CMS) heeft de beheerder volledige controle over het beheren van producten en categorieën. Ze kunnen eenvoudig elementen toevoegen, verwijderen of bijwerken, waardoor de website altijd up-to-date blijft met de nieuwste aanbiedingen.',
            'Al met al biedt deze website een naadloze en plezierige winkelervaring voor klanten, terwijl de beheerder moeiteloos productinformatie kan beheren en bijwerken.',
          ],
          descriptionEN: [
            'This website holds a special place as it was created for my wife, who will soon be launching her own business. It features a user-friendly interface where visitors can easily browse through various food categories and add products to their cart. Once they have completed their selection, they can submit their order, which will be stored in our database with a pending status. The admin can then review the order and update its status until it is delivered to the customer.',
            'With the assistance of the Strapi content management system (a headless CMS), the admin has full control over managing the products and categories. They can effortlessly add, delete, or update these elements, ensuring that the website always reflects the latest offerings.',
            'Overall, this website provides a seamless and enjoyable shopping experience for customers while empowering the admin to effortlessly manage and update product information.',
          ],
        },
        {
          id: '13',
          name: 'Primy',
          liveUrl: 'https://primy.nl',
          demoUrl: '',
          img: '/images/primy.jpg',
          sourceUrl: 'https://github.com/DegirmenciOmer/primy',
          technologies: [
            {
              id: '1',
              name: 'Typescript',
              Icon: SiTypescript,
              img: '/images/skills/typescript.png',
            },
            {
              id: '2',
              name: 'NextJs',
              Icon: SiNextdotjs,
              img: '/images/skills/next.png',
            },
            {
              id: '3',
              name: 'Tailwind',
              img: '/images/skills/tailwind.svg',
              Icon: SiTailwindcss,
            },
          ],
          descriptionNL: [
            'Ik heb het bouwen van de website van dit startende bedrijf overgenomen en heb de verzoeken van de klant geïmplementeerd door mijn UX/UI-vaardigheden in te zetten',
          ],
          descriptionEN: [
            "I took over building the website for this startup company. I implemented the client's requests by contributing with my UX/UI skills.",
          ],
        },
        {
          id: '14',
          name: 'Vue Task Tracker',
          liveUrl: 'https://vue-tracker-omer.netlify.app/',
          demoUrl: '',
          img: '/images/vue-tracker.jpg',
          sourceUrl: 'https://github.com/DegirmenciOmer/vue-task-tracker',
          technologies: [
            {
              id: '1',
              Icon: SiJavascript,
              name: 'Javascript',
              img: '/images/skills/js.png',
            },
            {
              id: '2',
              name: 'VueJS',
              img: '/images/skills/vue.png',
              Icon: SiVuedotjs,
            },
          ],
          descriptionNL: ['Mijn eerste Vue app.'],
          descriptionEN: ['My first vue app.'],
        },
        {
          id: '15',
          name: 'Stichting Harmonie Limburg',
          liveUrl: 'http://stharmonie.nl',
          demoUrl: '',
          img: '/images/sthlimburg.jpeg',
          sourceUrl: '',
          technologies: [
            {
              id: '1',
              name: 'Typescript',
              Icon: SiTypescript,
              img: '/images/skills/typescript.png',
            },
            {
              id: '2',
              Icon: SiJavascript,
              name: 'Javascript',
              img: '/images/skills/js.png',
            },
            {
              id: '3',
              name: 'NextJs',
              Icon: SiNextdotjs,
              img: '/images/skills/next.png',
            },
            {
              id: '4',
              name: 'NodeJs',
              Icon: SiNodedotjs,
              img: '/images/skills/nodejs.png',
            },
            {
              id: '5',
              name: 'Strapi',
              Icon: SiStrapi,
              img: '/images/skills/strapi.png',
            },
            {
              id: '6',
              name: 'PostgreSQL',
              Icon: SiPostgresql,
              img: '/images/skills/postgresql.png',
            },
          ],
          descriptionNL: [
            "I have developed the official website for this foundation, utilizing the Strapi content management system. This platform provides administrators with a user-friendly interface, making it exceptionally easy for them to manage the foundation's activities and other content on the live website. Administrators have the freedom to add, update, or delete content independently, without requiring technical assistance. This streamlined process empowers them to maintain an up-to-date and engaging website effortlessly.",
          ],
          descriptionEN: [
            'Ik heb de officiële website voor deze stichting ontwikkeld, waarbij ik gebruik heb gemaakt van het Strapi content management systeem. Dit platform biedt beheerders een gebruiksvriendelijke interface, waardoor het uitzonderlijk eenvoudig is om de activiteiten van de stichting en andere inhoud op de live website te beheren. Beheerders hebben de vrijheid om zelfstandig inhoud toe te voegen, bij te werken of te verwijderen, zonder technische assistentie nodig te hebben. Dit gestroomlijnde proces stelt hen in staat om moeiteloos een up-to-date en aantrekkelijke website te onderhouden.',
          ],
        },
      ],
      experienceTitle: NL ? 'Ervaring' : 'Experience',
      experience: [
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
