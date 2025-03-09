module.exports = {
    testEnvironment: "jsdom", // Use jsdom for React testing
    transform: {
      "^.+\\.jsx?$": "babel-jest", // Use babel-jest to transform JSX
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
    },
  };