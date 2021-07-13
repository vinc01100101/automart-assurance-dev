// let apiBaseUrl = process.env.SELLMYCAR_API_BASE_URL;
// let baseUrl = process.env.APP_BASEURL;
// let exportsObj;

// if (baseUrl == "/") {
//   exportsObj = {
//     publicRuntimeConfig: {
//       apiBasePath: apiBaseUrl
//     }
//   };
// } else {
//   exportsObj = {
//     basePath: baseUrl,
//     publicRuntimeConfig: {
//       basePath: baseUrl + "/",
//       apiBasePath: apiBaseUrl
//     },
//   };
// }

module.exports = {
    basePath: "/assurance",
    publicRuntimeConfig: {
        basePath: "/assurance",
    },
};
