function joinTwoStrings(firstString, secondString) {
    return firstString + secondString;
}

function joinThreeStringsAndAddSpaces(firstString, secondString, thirdString) {
    return firstString + " " 
           + secondString + " "
           + thirdString;
}

function getThe13thLetter(testString) {
    return testString.charAt(12);
}

function getTheNthLetter(testString, n) {
    return testString.charAt(n-1);
}

module.exports = {
    joinTwoStrings,
    joinThreeStringsAndAddSpaces,
    getThe13thLetter,
    getTheNthLetter
};
