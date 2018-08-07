const path = require("path");

module.exports = {
  port: 3000,
  hash: true,
  cdn: "https://zhw2590582.github.io/website-builder/",
  i18n: {
    zh: path.resolve('./src/languages/zh.json'),
    en: path.resolve('./src/languages/en.json'),
    jp: path.resolve('./src/languages/jp.json'),
  },
  htmlReplace: [{
    pattern: '@@email',
    replacement: 'laozhaochaguan@gmail.com'
  }, {
    pattern: '@@website',
    replacement: 'https://github.com/zhw2590582'
  }]
};
