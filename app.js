const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log(name, github);

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output');
});



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