module.exports = {
  default: {
    paths: ['gherkin-scenarios/*.feature'],
    require: ['test-implementation/step-definitions/*.js'],
    requireModule: ['@cucumber/cucumber'],
    format: ['progress-bar', 'html:cucumber-report.html'],
    formatOptions: { snippetInterface: 'synchronous' }
  }
}; 