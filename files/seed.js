const Hamoni = require("hamoni-sync");
const https = require("https");

const accountId = "8936e71adffd4d699ce2975bd46fda4b";
const appId = "8609a01a390d4e7582452b09cf93b2eb";
let hamoni;

const data = JSON.stringify({ accountId, appId });

const options = {
  hostname: "api.sync.hamoni.tech",
  path: "/v1/token",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length
  }
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", token => {
    hamoni = new Hamoni(token);

    hamoni
      .connect()
      .then(response => {
        hamoni
          .createList("personal", [
            { firstName: "James", lastName: "Darwin" },
            { firstName: "Jimmy", lastName: "August" }
          ])
          .then(() => console.log("create success"))
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  });
});

req.on("error", error => {
  console.error(error);
});

req.write(data);
req.end();
