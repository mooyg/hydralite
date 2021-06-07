"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const cors_1 = __importDefault(require("cors"));
const graphql_query_complexity_1 = require("graphql-query-complexity");
const CreateSchema_1 = __importDefault(require("./util/CreateSchema"));
(() => __awaiter(this, void 0, void 0, function* () {
    yield typeorm_1.createConnection();
    const schema = yield CreateSchema_1.default();
    const gqlServer = new apollo_server_express_1.ApolloServer({
        schema,
        context: ({ req, res }) => ({ req, res }),
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
                        const maximumQueryComplexity = 15;
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
    const port = process.env.PORT || 8000;
    expressServer.use(cors_1.default({
        origin: process.env.CLIENT_URL,
        credentials: true,
    }));
    gqlServer.applyMiddleware({ app: expressServer });
    expressServer.listen({ port }, () => {
        console.log(`Navigate to http://localhost:${port}${gqlServer.graphqlPath}`);
    });
}))();
//# sourceMappingURL=index.js.map