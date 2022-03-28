const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => {
    //for loop is same as for each method
    for (let i=0; i<profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('============');
// same as for loop above
    profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);