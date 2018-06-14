const setupPackageJson = require('./setupPackageJson');
const removeSetupFiles = require('./removeSetupFiles');


const install = () => {
  console.log('Running scripts');
  setupPackageJson();
  console.log('Removing files');
  removeSetupFiles();
  console.log('🎉 Setup is completed!');
};

install();
