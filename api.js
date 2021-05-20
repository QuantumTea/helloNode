// using the Node implementation of the Fetch API
// https://github.com/node-fetch/node-fetch

const fetch = require("node-fetch");

async function getResponseCode(urlString) {
  const statusCode = null;
  const response = null;
  try {
    response = await fetch("https://ghibliapi.herokuapp.com/films");
    statusCode = await response.status;
  } catch (error) {
    console.log("Error is: " + error);
  }

  console.log("Status code is " + statusCode);
  return statusCode.toString();
}

async function returnJSONfromAPI(titleString) {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const data = await response.json().then;
  return data;
}

module.exports = {
  getResponseCode,
  returnJSONfromAPI,
};
