const { stringUtils } = require('@generate/lib/utils');

test('check string contains space', () => {
    let stringTest = "new project"
    return expect(stringUtils.containsSpace(stringTest)).toBe(true)
});

test('check string contains not space', () => {
    let stringTest = "adonis"
    return expect(stringUtils.containsSpace(stringTest)).toBe(false)
});

test('check string contains symbol', () => {
    let stringTest = "project?"
    return expect(stringUtils.containSymbol(stringTest)).toBe(true)
});

test('check string contains not symbol', () => {
    let stringTest = "project"
    return expect(stringUtils.containSymbol(stringTest)).toBe(false)
});