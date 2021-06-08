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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const type_graphql_1 = require("type-graphql");
const UserSignOn_input_1 = require("./UserSignOn.input");
const User_entity_1 = __importDefault(require("../../../db/entity/User.entity"));
const axios_1 = __importDefault(require("axios"));
const typeorm_1 = require("typeorm");
const User_repo_1 = __importDefault(require("../../../db/repos/User.repo"));
let UserSignOnResolver = class UserSignOnResolver {
    userSignOn({ ghAccessToken }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = typeorm_1.getCustomRepository(User_repo_1.default);
            let ghResult;
            try {
                ghResult = (yield axios_1.default({
                    url: "https://api.github.com/user",
                    method: "GET",
                    headers: {
                        Authorization: `token ${ghAccessToken}`,
                    },
                })).data;
            }
            catch (_a) {
                throw new Error("There was an internal server error. Please make sure your github access token is valid.");
            }
            return yield userRepository.findOrCreateUserByGhId(ghResult);
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => User_entity_1.default, {
        nullable: true,
        description: "Take a users github access token and either register or log them in on DevMark",
    }),
    __param(0, type_graphql_1.Arg("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserSignOn_input_1.UserSignOnInput]),
    __metadata("design:returntype", Promise)
], UserSignOnResolver.prototype, "userSignOn", null);
UserSignOnResolver = __decorate([
    type_graphql_1.Resolver()
], UserSignOnResolver);
exports.default = UserSignOnResolver;
//# sourceMappingURL=UserSignOn.resolver.js.map