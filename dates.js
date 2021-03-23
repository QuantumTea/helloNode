// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// date months are zero-based, so December is month 11
// date days are NOT zero-based

function dayOfTheFirstOfMonth(year, month) {
   return dayOfTheWeek(year, month, 1);
}

function dayOfTheWeek(year, month, day) {
    var testDate = new Date(year, month, day);
    return testDate.getDay();
}

function dayNameOfTheWeek(year, month, day) { 
    var testDate = new Date(year, month, day);
    const options = { weekday: 'long' };
    return testDate.toLocaleDateString('EN-gb', options);
}

function hasFridayThirteenth(year, month) {
    var testDate = new Date(year, month, 13);
    // console.log("test date is " + testDate)
    if (testDate.getDay() === 5 )
        return true;
    else
        return false;
}

function numberOfFriday13thsThisYear(year) {
    var FridayThirteenths = 0;

    for (i = 0; i < 12; i++) {
        if (hasFridayThirteenth(year, i))
        FridayThirteenths ++;
      }

      return FridayThirteenths;
}

export default {
    dayOfTheFirstOfMonth,
    dayOfTheWeek,
    dayNameOfTheWeek,
    hasFridayThirteenth,
    numberOfFriday13thsThisYear
};
