module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testPathIgnorePatterns: ['<rootDir>/e2e/'],
    globals: {
        'ts-jest': {
            tsconfig: {
                jsx: 'react-jsx'
            }
        }
    }
};
