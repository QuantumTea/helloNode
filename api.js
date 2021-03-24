// using the Node implementation of the Fetch API
// https://github.com/node-fetch/node-fetch

const fetch = require("node-fetch");

async function getResponseCode(urlString) {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const statusCode = await response.status;

    return statusCode;
} 

async function returnJSONfromAPI(titleString) {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const data = await response.json().then 
        return data;
} 

module.exports = {
    getResponseCode,
    returnJSONfromAPI
};