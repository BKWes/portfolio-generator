const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [userName, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(userName, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});


// const printProfileData = profileDataArr => {
//     //for loop is same as forEach method
//     for (let i=0; i<profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('============');
// // same as for loop above forEach is an ARRAY METHOD - only works on arrays
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);