"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const User_entity_1 = __importDefault(require("./User.entity"));
const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
let Project = class Project extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Project.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    Column(),
    __metadata("design:type", String)
], Project.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(() => User_entity_1.default),
    typeorm_1.ManyToOne(() => User_entity_1.default),
    __metadata("design:type", User_entity_1.default)
], Project.prototype, "owner", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    Column({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "logoUrl", void 0);
__decorate([
    type_graphql_1.Field(() => [User_entity_1.default]),
    typeorm_1.ManyToMany(() => User_entity_1.default, (user) => user.likedProjects),
    __metadata("design:type", Array)
], Project.prototype, "likers", void 0);
__decorate([
    type_graphql_1.Field(() => [User_entity_1.default]),
    typeorm_1.JoinTable(),
    typeorm_1.ManyToMany(() => User_entity_1.default, (user) => user.projects),
    __metadata("design:type", Array)
], Project.prototype, "collaborators", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    Column("bigint", { unique: true }),
    __metadata("design:type", Number)
], Project.prototype, "githubId", void 0);
Project = __decorate([
    type_graphql_1.ObjectType(),
    Entity("projects")
], Project);
exports.default = Project;
//# sourceMappingURL=Project.entity.js.map