const path = require("path");
module.exports = {
  i18n: {
    locales: ["uk","us"],
    defaultLocale: "uk",
    localeDetection: false,
  },
  localePath: path.resolve("./public/locales"),
};
