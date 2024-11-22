const path = require("path");

module.exports = {
  babel: {
    plugins: [
      // Enable the new JSX transform for React 17+
      ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }],

      // Optimize Material-UI imports
      [
        "babel-plugin-transform-imports",
        {
          "@mui/material": {
            // Import only the used components from Material-UI
            transform: "@mui/material/${member}",
            preventFullImport: true,
          },
          "@mui/icons-material": {
            // Import only the used icons
            transform: "@mui/icons-material/${member}",
            preventFullImport: true,
          },
        },
      ],
    ],
  },
  webpack: {
    alias: {
      // Example alias
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  jest: {
    configure: {
      // Example custom Jest configuration
      setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
      testEnvironment: "jsdom",
      moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/src/components$1",
      },
      collectCoverage: true, // Enable coverage collection
      collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}", // Collect coverage from all JS/TS files
        "!src/**/*.d.ts", // Exclude TypeScript definition files
        "!src/serviceWorker.js", // Exclude specific files
        "!src/setupTests.js", // Exclude setup files
        "!src/**/*.test.{js,jsx,ts,tsx}", // Exclude test files from coverage
      ],
      coverageDirectory: "coverage", // Directory to store the coverage report
      coverageReporters: ["lcov", "text-summary"], // Types of reports (HTML, text, lcov)
      // Enforce coverage thresholds
      coverageThreshold: {
        global: {
          statements: 70, // 70% statement coverage
          branches: 70, // 70% branch coverage
          functions: 70, // 70% function coverage
          lines: 70, // 70% line coverage
        },
      },
    },
  },
};
