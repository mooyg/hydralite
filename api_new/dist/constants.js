"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProd = exports.pathsToResolvers = exports.projectName = void 0;
exports.projectName = "hydralite";
exports.pathsToResolvers = [
    __dirname + "\\resolvers\\**\\*.resolver.js",
    __dirname + "\\resolvers\\**\\*.resolver.ts",
];
exports.isProd = process.env.NODE_ENV === "production";
//# sourceMappingURL=constants.js.map