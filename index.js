const core = require('@actions/core');
const github = require('@actions/github');
const semver = require('semver');

try {

  const currentVersion = core.getInput('current-version');
  console.log(`The current version of the app is ${currentVersion}!`);
  const cleanCurrentVersion = semver.clean(previousVersion)

  const previousVersion = core.getInput('previous-version');
  console.log(`The previous version of the app is ${previousVersion}!`);

  const diff = semver.diff(currentVersion, previousVersion)

  const incrementMajor = semver.inc(previousVersion, 'major')
  const incrementMinor = semver.inc(previousVersion, 'minor')
  const incrementPatch = semver.inc(previousVersion, 'patch')

  if (cleanCurrentVersion == incrementMajor) {
    console.log(`Incremented major version, new version is ${incrementMajor}!`);
  }

  if (cleanCurrentVersion == incrementMinor) {
    console.log(`Incremented minor version, new version is ${incrementMinor}!`);
  }

  if (cleanCurrentVersion == incrementPatch) {
    console.log(`Incremented patch version, new version is ${incrementPatch}!`);
  }

  if (cleanCurrentVersion !== incrementMajor || cleanCurrentVersion !== incrementMajor, cleanCurrentVersion !== incrementMajor) {
    throw `Invalid app version ${cleanCurrentVersion}!`;
  }

} catch (error) {
  core.setFailed(error.message);
}