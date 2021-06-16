"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProd = exports.pathsToResolvers = exports.pathsToEntities = exports.projectName = void 0;
exports.projectName = "hydralite";
exports.pathsToEntities = [__dirname + "\\db\\entity\\**\\*.entity.js"];
exports.pathsToResolvers = [
    __dirname + "\\prisma\\generated\\typegraphql-prisma",
];
exports.isProd = process.env.NODE_ENV === "production";
//# sourceMappingURL=constants.js.map