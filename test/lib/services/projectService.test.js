describe('ProjectService', () => {
    beforeEach(() => {
        jest.resetModules();
        console.log = jest.fn(); // create a new mock function for each test
    })

    test('should create new project successfully', async () => {
        const error = null;
        const log = "ok";
        const { createNewProject } = require('@generate/lib/services/projectService');
        const { exec } = require('child_process');
        const projectInformation = {
            projectType: 'library',
            projectTitle: 'Graph',
            packageName: 'com.graph',
            initialVersion: '0.01',
            description: 'Basic graph',
            author: 'sam',
            repositoryUrl: 'http://graph.com'
        }

        jest.mock('inquirer', () => ({
            prompt: jest.fn().mockReturnValueOnce(projectInformation)
        }))
        jest.mock('child_process', () => ({
            exec: jest.fn().mockImplementationOnce((command, callback) => callback(error, log))
        }));
        await createNewProject();
        expect(exec).toHaveBeenCalled();
        expect(console.log).toHaveBeenNthCalledWith(1, 'Generating Graph files');
        expect(console.log).toHaveBeenNthCalledWith(2, "ok");
    })

    test('should create new project not successfully', async () => {
        const error = {
            data: "someError"
        };
        const log = "ok";
        const { createNewProject } = require('@generate/lib/services/projectService');
        const { exec } = require('child_process');
        const projectInformation = {
            projectType: 'library',
            projectTitle: 'Graph',
            packageName: 'com.graph',
            initialVersion: '0.01',
            description: 'Basic graph',
            author: 'sam',
            repositoryUrl: 'http://graph.com'
        }

        jest.mock('inquirer', () => ({
            prompt: jest.fn().mockReturnValueOnce(projectInformation)
        }))
        jest.mock('child_process', () => ({
            exec: jest.fn().mockImplementationOnce((command, callback) => callback(error, log))
        }));
        await createNewProject();
        expect(exec).toHaveBeenCalled();
        expect(console.log).toHaveBeenNthCalledWith(1, 'Generating Graph files');
        expect(console.log).toHaveBeenNthCalledWith(2, "ok");
        expect(console.log).toHaveBeenNthCalledWith(3, "Failed to run the project, make sure you have already do 'npm install' first in your Astrophel project and run 'npm start' in your root project folder", { "data": "someError" });
    })
});
