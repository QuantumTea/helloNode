function joinTwoStrings(firstString, secondString) {
    return firstString + secondString;
}

function joinThreeStrings(firstString, secondString, thirdString) {
    return firstString + " " 
           + secondString + " "
           + thirdString;
}

function getTheNthLetter(testString, n) {
    return testString.charAt(n-1);
}

module.exports = {
    joinTwoStrings,
    joinThreeStrings,
    getTheNthLetter
};
