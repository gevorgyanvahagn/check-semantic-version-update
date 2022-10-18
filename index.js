const core = require('@actions/core');
const github = require('@actions/github');

try {

  const currentVersion = core.getInput('current-version');
  console.log(`The current version of the app is ${currentVersion}!`);

  const previousVersion = core.getInput('previous-version');
  console.log(`The previous version of the app is ${previousVersion}!`);

  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  
} catch (error) {
  core.setFailed(error.message);
}