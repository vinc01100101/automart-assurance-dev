let baseUrl = process.env.APP_BASEURL;
let exportsObj;

if (baseUrl == "/") {
  exportsObj = {};
} else {
  exportsObj = {
    basePath: baseUrl,
    publicRuntimeConfig: {
      basePath: baseUrl + "/",
    },
  };
}

module.exports = exportsObj;
