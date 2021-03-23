function joinTwoStrings(firstString, secondString) {
    return firstString + secondString;
}

function joinThreeStringsWithoutSpaces(firstString, secondString, thirdString) {
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

export default {
    joinTwoStrings,
    joinThreeStringsWithoutSpaces,
    getThe13thLetter,
    getTheNthLetter
};
