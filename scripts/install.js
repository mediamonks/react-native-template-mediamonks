const setupPackageJson = require('./setupPackageJson.js');
const removeSetupFiles = require('./removeSetupFiles.js');


const install = () => {
  console.log('Running scripts');
  setupPackageJson();
  console.log('Removing scripts');
  removeSetupFiles();
  console.log('🎉 Setup is completed!');
};

install();
