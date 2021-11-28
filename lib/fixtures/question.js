const { stringUtils } = require('../utils');

const validateProjectName = (input) => {
    const isContainSpace = stringUtils.containsSpace(input);
    const isContainSymbol = stringUtils.containSymbol(input);
    if (isContainSpace || isContainSymbol) {
        return 'Please put a project name without space and any symbol'
    }
    return true;
}

const createProjectQuestions = [{
        type: 'list',
        name: 'projectType',
        message: 'Select microfrontend type',
        default: 'container',
        choices: [
            { name: 'Microfrontend Container', value: 'container' },
            { name: 'Microfrontend Component', value: 'microfrontend' },
            { name: 'Microfrontend Static', value: 'static' }
        ]
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Project title',
        default: 'Microfrontend'
    },
    {
        type: 'input',
        name: 'packageName',
        message: 'Package name',
        default: 'microfrontend-container-project',
        validate: validateProjectName
    },
    {
        type: 'input',
        name: 'initialVersion',
        message: 'Initial version',
        default: '0.0.1'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description',
        default: 'Microfrontend'
    },
    {
        type: 'input',
        name: 'author',
        message: 'Author',
        default: 'Microfrontend'
    },
    {
        type: 'input',
        name: 'repositoryUrl',
        message: 'Repository URL',
        default: 'https://github.com'
    },
];

module.exports = {
    createProjectQuestions,
    validateProjectName
}