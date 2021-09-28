const inquirer = require("inquirer");

const { questionFixtures } = require("../fixtures");

const createNewProject = (options) => {
  collectProjectInformation(options);
};

const runProject = (options) => {
  const runProjectPath = `$(npm root -g)/astrophel-cli/lib/executables/run-project.sh`;
  const exec = require("child_process").
  exec(
    `sh ${runProjectPath}`,
    (error, stdout, stderr) => {
      console.log(stdout);
      if (error !== null) {
        console.log(
          "Failed to run the project, make sure you have already do 'npm install' first in your Astrophel project and run 'npm start' in your root project folder",
          error
        );
      }
    }
  );
};

const generateStarterFiles = (projectType, projectTitle, generatorPayload) => {
  const shellgeneratorPath = `$(npm root -g)/microfrontend-generator/lib/executables/generate-project-files.sh`;
  console.log(`Generating ${projectTitle} files`);
  const exec = require("child_process").
  exec(
    `projectType=${projectType} projectTitle="${projectTitle}" generatorPayload="${generatorPayload}" sh ${shellgeneratorPath}`,
    (error, stdout, stderr) => {
      console.log(stdout);
      if (error !== null) {
        console.log(
          "Failed generating the starter project files, please contact retzd.tech@gmail.com",
          error
        );
      }
    }
  );
};

const collectProjectInformation = () => {
  inquirer
    .prompt(questionFixtures.createProjectQuestions)
    .then((projectInformation) => {
      console.log("Creating your project");
      console.log("----------------------");
      const {
        projectType,
        projectTitle,
        packageName,
        initialVersion,
        description,
        author,
        repositoryUrl
      } = projectInformation;
      const generatorPayload = `--projectType ${projectType} --projectTitle "${projectTitle}" --packageName ${packageName} --initialVersion ${initialVersion} --description "${description}" --repositoryUrl "${repositoryUrl}" --author ${author}`
      generateStarterFiles(projectType, projectTitle, generatorPayload);
    });
};

module.exports = {
  createNewProject,
  runProject
};
