const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: '<rootDir>' })

const customJestConfig = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src', '<rootDir>/pages'],
    moduleDirectories: ['node_modules', '<rootDir>'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|ico|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)(\\?.+)?$$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    },
    globals: {
        'ts-jest': {
            babelConfig: 'babel.config.js',
            tsconfig: 'tsconfig.json',
            diagnostics: {
                warnOnly: true,
            },
        },
    },
}

module.exports = createJestConfig(customJestConfig)
