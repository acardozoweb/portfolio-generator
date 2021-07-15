const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output');
// });

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
    }
  ]);
};




const promptProject = portfolioData => {
    console.log(`
==================
Add a New Project
==================
`);

    // if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: "description",
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter enother project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};


promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });

/// COMMENTED = KEEPING FOR REFERENCE ///


// const profileDataArgs = process.argv.slice(2);

// console.log(profileDataArgs);

// const [name, github] = profileDataArgs;

// console.log(name, github);



// console.log(profilerDataArgs)

// const printProfileData = profileDataArr => {
//     // THis...
//     for (let i = 0; i < profileDataArr.length; i++) {
//       console.log(profileDataArr[i]);
//     }

//     console.log('==========');

//     // ...is the same as this
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
//   };
  
// printProfileData(profilerDataArgs);