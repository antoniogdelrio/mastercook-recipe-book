import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.ts',
    '!*.config.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/src/constants/**',
    '!<rootDir>/pages/_app.tsx',
    '!<rootDir>/pages/_document.tsx'
  ],
  coveragePathIgnorePatterns: [
    "node_modules",
    "test"
  ]
}

module.exports = createJestConfig(customJestConfig)