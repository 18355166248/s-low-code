"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    name: "micro_app",
    url: "http://localhost:10000/",
    exposes: [],
    remotes: [
        {
            name: "base_app",
            url: "http://localhost:8080/",
            sharedLibraries: [
                "react",
                "react-dom",
                "react/jsx-dev-runtime",
                "react-router",
                "react-router-dom",
                "react-router-config",
            ],
        },
    ],
};
exports.default = config;
//# sourceMappingURL=app-config.js.map