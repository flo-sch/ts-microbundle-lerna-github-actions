// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest/utils');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  collectCoverage: true,
  coverageDirectory: '<rootDir>/reports/coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!*.test.*', '!src/index.ts'],
  coverageReporters: ['lcov', 'text'],
  displayName: 'unit',
  moduleFileExtensions: ['js', 'ts'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
  reporters: [
    'default',
    // IMPORTANT: reporter options are not available in CLI!
    // https://jestjs.io/docs/en/cli#--reporters
    [
      'jest-junit',
      {
        suiteName: 'Unit tests',
        outputDirectory: './reports',
        outputName: 'unit-tests.xml',
      },
    ],
  ],
  rootDir: './',
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true,
};
