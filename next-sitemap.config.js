/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL ||
    "https://www.paintigo.shop" ||
    "https://paintigo.shop",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
