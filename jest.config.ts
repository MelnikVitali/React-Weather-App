export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: 'src',
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  setupFilesAfterEnv: ['<rootDir>/tests/jestSetup.ts'],
  moduleNameMapper: {
    // '^src/(.+)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
