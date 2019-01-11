'use strict';
const fs = require('fs');
const path = require('path');

/**
 * Add custom scripts specific to the project.
 *
 */
const setupPackageJson = () => {
  const fileName = 'package.json';
  const packageFile = path.resolve(fileName);
  let file = require(packageFile);

  // Setup scripts
  const customScriptsJsonPath = path.resolve('./scripts/data/customScripts.json');
  const customScriptsJSON = JSON.parse(fs.readFileSync(customScriptsJsonPath));
  file.scripts = Object.assign({}, file.scripts, customScriptsJSON);

  // Setup lint-staged
  const lintStagedJsonPath = path.resolve('./scripts/data/lint-staged.json');
  file['lint-staged'] = JSON.parse(fs.readFileSync(lintStagedJsonPath));


  fs.writeFileSync(fileName, JSON.stringify(file, null, 2), 'utf8');
};

module.exports = setupPackageJson;
