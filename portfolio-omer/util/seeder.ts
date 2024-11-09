// // import { Project, Technology, ProjectTechnology, Description } from '';  // Adjust import paths as needed

// const projectData = [
//   {
//     id: 0,
//     name: 'Income & Expense Tracker',
//     sourceUrl: 'https://github.com/DegirmenciOmer/React-expense-tracker',
//     demoUrl: 'https://expensetracker-omer.netlify.app/',
//     img: '/images/expense.PNG',
//     locale: 'nl',
//     technologies: [
//       { id: 1, name: 'React', img: '/images/skills/react.png', icon: 'SiReact' },
//       { id: 2, name: 'JavaScript', img: '/images/skills/js.png', icon: 'SiJavascript' },
//     ],
//     descriptionEN: [
//       'My first React project using React hooks (useState, useContext, useReducer) and the context API.',
//     ],
//     descriptionNL: [
//       'Mijn eerste React-project waarin ik React-hooks (useState, useContext, useReducer) en de context-API gebruik.',
//     ],
//   },

// ];

// async function seedDatabase() {
//   for (const project of projectData) {
//     // Insert project
//     const newProject = await Project.create({
//       id: project.id,
//       name: project.name,
//       sourceUrl: project.sourceUrl,
//       demoUrl: project.demoUrl,
//       img: project.img,
//       locale: project.locale,
//     });

//     // Insert descriptions in both English and Dutch
//     for (const [locale, descriptions] of Object.entries({
//       en: project.descriptionEN,
//       nl: project.descriptionNL,
//     })) {
//       for (const text of descriptions) {
//         await Description.create({
//           project_id: newProject.id,
//           locale,
//           description: text,
//         });
//       }
//     }

//     // Insert technologies and associate them with the project
//     for (const tech of project.technologies) {
//       let technology = await Technology.findOne({ where: { name: tech.name } });
//       if (!technology) {
//         technology = await Technology.create({
//           id: tech.id,
//           name: tech.name,
//           img: tech.img,
//           icon: tech.icon,
//         });
//       }

//       await ProjectTechnology.create({
//         project_id: newProject.id,
//         technology_id: technology.id,
//       });
//     }
//   }

//   console.log('Database seeding completed!');
// }

// seedDatabase().catch((err) => {
//   console.error('Failed to seed database:', err);
// });
