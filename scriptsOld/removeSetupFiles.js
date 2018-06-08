const execSync = require('child_process').execSync;
const path = require('path');

const deletePath = (path) => execSync(`rm -rf ${path}`);

const removeSetupFiles = () => {
  // Remove Scripts Directory
  const scriptsDirPath = path.resolve('scripts');
  deletePath(scriptsDirPath);
  // Remove created files that aren't needed
};

module.exports = removeSetupFiles;

