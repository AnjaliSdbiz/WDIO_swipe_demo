// wdio.conf.js (CommonJS)
const { join } = require('node:path');

/** @type {import('@wdio/types').Options.Testrunner} */
exports.config = {
  runner: 'local',
  specs: ['./test/**/*.e2e.js'],
  maxInstances: 1,

  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: { timeout: 120000 },

  port: 4723,
  services: ['appium'],

  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Emulator',
    // 'appium:avd': 'Pixel_7_Pro_API_34', // optional if you want a specific AVD
    'appium:app': join(process.cwd(), 'app', 'android.wdio.native.app.v2.0.0.apk'),
    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 120
  }],
};