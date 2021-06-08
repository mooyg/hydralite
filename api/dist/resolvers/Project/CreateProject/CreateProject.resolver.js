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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Project_entity_1 = __importDefault(require("../../../db/entity/Project.entity"));
const type_graphql_1 = require("type-graphql");
const User_entity_1 = __importDefault(require("../../../db/entity/User.entity"));
const faker_1 = __importDefault(require("faker"));
let CreateProjectResolver = class CreateProjectResolver {
    createProject() {
        return __awaiter(this, void 0, void 0, function* () {
            let user = (yield User_entity_1.default.find({ relations: ["profile"] }))[0];
            let project = new Project_entity_1.default();
            project.title = faker_1.default.lorem.words();
            project.githubId = faker_1.default.datatype.number(9999999999);
            project.owner = user;
            project.collaborators = [user];
            project.likers = [user];
            project = yield project.save();
            user.likedProjects = [project];
            user = yield user.save();
            yield project.reload();
            return project;
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Project_entity_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CreateProjectResolver.prototype, "createProject", null);
CreateProjectResolver = __decorate([
    type_graphql_1.Resolver()
], CreateProjectResolver);
exports.default = CreateProjectResolver;
//# sourceMappingURL=CreateProject.resolver.js.map