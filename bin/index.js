#!/usr/bin/env node

const program = require('commander');

const { createNewProject, runProject } = require('../lib/services/projectService');

program
    .command('generate')
    .option('-n, --name <project-name>', 'Name of the project', 'microfrontend-project')
    .description('Create new microfrontend project')
    .action((options) => {
        createNewProject(options);
    });

program.parse(process.argv);