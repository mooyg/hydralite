"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
class MainResolver {
    main() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return "imagine using rest - gql 2021";
        });
    }
}
tslib_1.__decorate([
    type_graphql_1.Query(() => String),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], MainResolver.prototype, "main", null);
exports.default = MainResolver;
