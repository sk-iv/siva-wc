const { resolve } = require('path');

module.exports = {
  rootDir: resolve(__dirname, './'),
  testEnvironment: 'jsdom',
  "extensionsToTreatAsEsm": [".ts"],
  "globals": {
    "ts-jest": {
      "useESM": true
    }
  },
  moduleNameMapper: {
    // Необходимо для поддержки css модулей
    // '\\.(css)$': 'identity-obj-proxy',
    // поддержка alias для путей файлов
    // '^@sivasifr/(.+)': '<rootDir>/packages/$1',
  },
}