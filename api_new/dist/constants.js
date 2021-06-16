"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProd = exports.pathsToResolvers = exports.projectName = void 0;
exports.projectName = "hydralite";
exports.pathsToResolvers = [
    __dirname + "\\resolvers\\**\\*.resolver.js",
];
exports.isProd = process.env.NODE_ENV === "production";
//# sourceMappingURL=constants.js.map