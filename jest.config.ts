export default {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },

    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^.+\\.svg$": "jest-transformer-svg",
    },

    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    collectCoverage: true,
    coverageProvider: "v8",
    coverageReporters: ["text", "html", "json"],
    coveragePathIgnorePatterns: ["/node_modules/", "\\.d\\.ts$", "\\.spec\\.tsx$"]
};
