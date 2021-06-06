"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
let User = class User {
};
tslib_1.__decorate([
    PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    Column(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "age", void 0);
User = tslib_1.__decorate([
    Entity("users")
], User);
exports.User = User;
