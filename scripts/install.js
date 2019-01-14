const setupPackageJson = require('./setupPackageJson');
const removeSetupFiles = require('./removeSetupFiles');

const install = async () => {
  console.log('Running scripts');
  setupPackageJson();
  console.log('Removing files');
  await removeSetupFiles();
  console.log('🎉 Setup is completed!');
};

install();
