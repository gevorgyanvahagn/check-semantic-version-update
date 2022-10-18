const core = require('@actions/core');
const github = require('@actions/github');
const semver = require('semver');

try {

  const currentVersion = core.getInput('current-version');
  console.log(`The current version of the app is ${currentVersion}!`);

  const previousVersion = core.getInput('previous-version');
  console.log(`The previous version of the app is ${previousVersion}!`);

  const diff = semver.diff(currentVersion, previousVersion)

  const incrementMajor = semver.inc('previousVersion', 'major')
  const incrementMinor = semver.inc('previousVersion', 'minor')
  const incrementPatch = semver.inc('previousVersion', 'patch')

  console.log(`Incremented major ${incrementMajor}!`);
  console.log(`Incremented minor ${incrementMinor}!`);
  console.log(`Incremented patch ${incrementPatch}!`);


  console.log(`The diff is ${diff}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

} catch (error) {
  core.setFailed(error.message);
}