"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
function CreateSchema() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return type_graphql_1.buildSchema({
            resolvers: [__dirname + "/../resolvers/**/*.resolver.ts"],
        });
    });
}
exports.default = CreateSchema;
