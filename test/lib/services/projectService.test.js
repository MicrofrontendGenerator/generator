describe('ProjectService', () => {
    beforeEach(() => {
        jest.resetModules();
        console.log = jest.fn(); // create a new mock function for each test
    })
    test('createNewProjectPositive', async() => {
        const { createNewProject } = require('@generate/lib/services/projectService');
        const { exec } = require('child_process');
        const projectInformation = {
            projectType: '',
            projectTitle: '',
            packageName: '',
            initialVersion: '',
            description: '',
            author: '',
            repositoryUrl: ''
        }

        jest.mock('inquirer', () => ({
            prompt: jest.fn().mockReturnValueOnce(projectInformation)
        }))
        jest.mock('child_process', () => ({
            exec: jest.fn().mockImplementationOnce((command, callback) => callback(null, "ok"))
        }));
        await createNewProject();
        expect(exec).toHaveBeenCalled();
        expect(console.log).toHaveBeenNthCalledWith(1, 'Generating  files');
        expect(console.log).toHaveBeenNthCalledWith(2, "ok");
    })


    test('createNewProjectNegative', async() => {
        const { createNewProject } = require('@generate/lib/services/projectService');
        const { exec } = require('child_process');
        const projectInformation = {
            projectType: '',
            projectTitle: '',
            packageName: '',
            initialVersion: '',
            description: '',
            author: '',
            repositoryUrl: ''
        }

        jest.mock('inquirer', () => ({
            prompt: jest.fn().mockReturnValueOnce(projectInformation)
        }))
        jest.mock('child_process', () => ({
            exec: jest.fn().mockImplementationOnce((command, callback) => callback("null", "ok"))
        }));
        await createNewProject();
        expect(exec).toHaveBeenCalled();
        expect(console.log).toHaveBeenNthCalledWith(1, 'Generating  files');
        expect(console.log).toHaveBeenNthCalledWith(2, "ok");
        expect(console.log).toHaveBeenNthCalledWith(3, "Failed to run the project, make sure you have already do 'npm install' first in your Astrophel project and run 'npm start' in your root project folder", "null");
    })
});