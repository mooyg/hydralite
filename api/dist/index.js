"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = tslib_1.__importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const cors_1 = tslib_1.__importDefault(require("cors"));
const graphql_query_complexity_1 = require("graphql-query-complexity");
const CreateSchema_1 = tslib_1.__importDefault(require("./util/CreateSchema"));
(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // Initalize typeorm
    yield typeorm_1.createConnection();
    // Initialize Apollo Server
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
    // Create Express Server
    const expressServer = express_1.default();
    const port = process.env.PORT || 8000;
    // Express Middleware
    expressServer.use(cors_1.default({
        origin: process.env.CLIENT_URL,
        credentials: true,
    }));
    // Enable express to be used with gql
    gqlServer.applyMiddleware({ app: expressServer });
    // Start Server
    expressServer.listen({ port }, () => {
        console.log(`Navigate to http://localhost:${port}${gqlServer.graphqlPath}`);
    });
}))();
