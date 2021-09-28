const containsSpace = (string) => {
    const regex = /\s/;
    const isContainsSpace = regex.test(string);
    return isContainsSpace;
}

const containSymbol = (string) => {
    const regex = /[ `!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/;
    const isContainSymbol = regex.test(string)
    return isContainSymbol;
}

module.exports = {
    containsSpace,
    containSymbol
}