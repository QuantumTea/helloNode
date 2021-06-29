// using the Node implementation of the Fetch API
// https://github.com/node-fetch/node-fetch

const fetch = require("node-fetch");

async function getResponseCode(urlString) {
  var statusCode = null;
  var response = null;
  try {
    response = await fetch("https://ghibliapi.herokuapp.com/films");
    statusCode = await response.status;
    //console.log("Status code is " + statusCode);
  } catch (error) {
    console.log("Error is: " + error);
  }

  return statusCode.toString();
}

async function returnJSONfromAPI(titleString) {
  var response = await fetch("https://ghibliapi.herokuapp.com/films");
  var data = await response.json().then;
  return data;
}

module.exports = {
  getResponseCode,
  returnJSONfromAPI,
};
