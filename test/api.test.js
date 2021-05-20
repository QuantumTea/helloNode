const apiFunctions = require("../api.js");

describe("Basic API operations", () => {
  test("Can tell you what the HTTP response code was", () => {
    let statusCode = apiFunctions.getResponseCode();
    expect(statusCode).toContain(200);
  });

  test("Can tell if one of them is Castle In The Sky", () => {
    let response = apiFunctions.returnJSONfromAPI("Castle in the sky");
    console.log(response);
    expect(response).toContain("Castle in the sky");
  });
});
