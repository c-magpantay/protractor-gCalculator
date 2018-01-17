exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  resultJsonOutputFile: 'results/testResults.json',
  baseUrl: 'https://www.google.com/search?q=calculator',
  specs: ['test/calculatorSpec.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  }, {
    browserName: 'firefox'
  }, {
    browserName: 'internet explorer'
  }]
}