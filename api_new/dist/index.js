"use strict";
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
require("reflect-metadata");
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const graphql_query_complexity_1 = require("graphql-query-complexity");
const dotenv_1 = __importDefault(require("dotenv"));
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const ioredis_1 = __importDefault(require("ioredis"));
const CreateSchema_1 = __importDefault(require("./util/CreateSchema"));
const apollo_server_express_1 = require("apollo-server-express");
const constants_1 = require("./constants");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        const RedisStore = connect_redis_1.default(express_session_1.default);
        const redis = new ioredis_1.default();
        const schema = yield CreateSchema_1.default();
        const gqlServer = new apollo_server_express_1.ApolloServer({
            schema,
            context: ({ req, res }) => ({
                req,
                res,
                prisma: new client_1.PrismaClient(),
            }),
            plugins: [
                {
                    requestDidStart: () => ({
                        didResolveOperation({ request, document }) {
                            const complexity = graphql_query_complexity_1.getComplexity({
                                schema,
                                operationName: request.operationName,
                                query: document,
                                variables: request.variables,
                                estimators: [
                                    graphql_query_complexity_1.fieldExtensionsEstimator(),
                                    graphql_query_complexity_1.simpleEstimator({ defaultComplexity: 1 }),
                                ],
                            });
                            const maximumQueryComplexity = 30;
                            if (complexity > maximumQueryComplexity) {
                                console.log(complexity);
                                throw new Error(`Maximum query complexity of ${maximumQueryComplexity} has been reached.`);
                            }
                        },
                    }),
                },
            ],
        });
        const expressServer = express_1.default();
        expressServer.use(cors_1.default({
            origin: process.env.CLIENT_URL,
            credentials: true,
        }));
        expressServer.use(express_session_1.default({
            name: `${constants_1.projectName}_accto`,
            store: new RedisStore({
                client: redis,
            }),
            secret: process.env.sessionSecret || "pog",
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: constants_1.isProd,
                maxAge: 1000 * 60 * 60 * 24 * 365,
            },
        }));
        gqlServer.applyMiddleware({ app: expressServer });
        const port = process.env.PORT || 8000;
        expressServer.listen({ port }, () => {
            console.log(`Navigate to http://localhost:${port}${gqlServer.graphqlPath}`);
        });
    });
}
main().catch((err) => console.error(err));
//# sourceMappingURL=index.js.map