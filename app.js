const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output');
// });


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));



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