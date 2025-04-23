const { TimelineService } = require("wdio-timeline-reporter/timeline-service");

exports.config = {
  specs: ["./**/wdi5/specs/**/*.js"],
  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: ["--no-sandbox", "--disable-dev-shm-usage"],
      },
    },
  ],

  logLevel: "error",

  bail: 0,

  baseUrl: "http://localhost:4004/fiori-apps.html#Books-manage",
  waitforTimeout: 10000,

  connectionRetryTimeout: process.argv.indexOf("--debug") > -1 ? 1200000 : 120000,

  connectionRetryCount: 3,

  services: ["chromedriver", "ui5", [TimelineService]],

  framework: "mocha",

  reporters: [
    "spec",
    [
      "timeline",
      {
        outputDir: "target",
        embedImages: true,
        screenshotStrategy: "before:click",
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: process.argv.indexOf("--debug") > -1 ? 600000 : 60000,
  },
};
