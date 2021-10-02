const question = require('@generate/lib/fixtures/question');

test('validate project name contains space and symbol', () => {
    let stringTest = "new project?"
    return expect(question.validateProjectName(stringTest)).toBe("Please put a project name without space and any symbol")
});

test('validate project name not space and symbol', () => {
    let stringTest = "adonis"
    return expect(question.validateProjectName(stringTest)).toBe(true)
});

test('validate project name contains symbol', () => {
    let stringTest = "project?"
    return expect(question.validateProjectName(stringTest)).toBe("Please put a project name without space and any symbol")
});

test('validate project name contains not space', () => {
    let stringTest = "project "
    return expect(question.validateProjectName(stringTest)).toBe("Please put a project name without space and any symbol")
});