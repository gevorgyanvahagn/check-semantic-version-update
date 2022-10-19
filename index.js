const core = require('@actions/core');
const github = require('@actions/github');
const semver = require('semver');

try {

  const currentVersion = core.getInput('current-version');
  console.log(`The current version of the app is ${currentVersion}!`);
  const cleanCurrentVersion = semver.clean(currentVersion)

  const previousVersion = core.getInput('previous-version');
  console.log(`The previous version of the app is ${previousVersion}!`);

  const diff = semver.diff(currentVersion, previousVersion)

  const incrementMajor = semver.inc(previousVersion, 'major')
  const incrementMinor = semver.inc(previousVersion, 'minor')
  const incrementPatch = semver.inc(previousVersion, 'patch')

  if (cleanCurrentVersion == incrementMajor || cleanCurrentVersion !== incrementMinor || cleanCurrentVersion !== incrementPatch) {
    if (cleanCurrentVersion == incrementMajor) {
        console.log(`Incremented major version, new version is ${incrementMajor}!`);
      }
    
      if (cleanCurrentVersion == incrementMinor) {
        console.log(`Incremented minor version, new version is ${incrementMinor}!`);
      }
    
      if (cleanCurrentVersion == incrementPatch) {
        console.log(`Incremented patch version, new version is ${incrementPatch}!`);
      }
  } else {
    console.log(`*********************************************************************************`);
    console.log(`Invalid app version ${currentVersion}, please check https://semver.org for best practicies of updating the semantic version of  the app`);
    console.log(`You can delete tag ${currentVersion} with the following commands:`);
    console.log(`   git push --delete origin ${currentVersion}`);
    console.log(`   git fetch origin --prune --prune-tags`);
    console.log(`*********************************************************************************`);
    throw new Error(`Invalid app version ${currentVersion}, previous app version is ${previousVersion}!`);
  }

} catch (error) {
  core.setFailed(error.message);
}