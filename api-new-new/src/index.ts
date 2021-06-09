import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import {
  fieldExtensionsEstimator,
  getComplexity,
  simpleEstimator,
} from "graphql-query-complexity";
import CreateSchema from "./util/CreateSchema";
import ContextType from "./types/Context.type";
import { createConnection } from "typeorm";

(async () => {
  // Initalize typeorm
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "devmark",
    entities: [],
    synchronize: true,
    logging: false,
  });

  // Initialize Apollo Server
  const schema = await CreateSchema();
  const gqlServer = new ApolloServer({
    schema,
    context: ({ req, res }: ContextType) => ({ req, res }),
    plugins: [
      {
        requestDidStart: () => ({
          didResolveOperation({ request, document }) {
            const complexity = getComplexity({
              schema,
              operationName: request.operationName,
              query: document,
              variables: request.variables,
              estimators: [
                fieldExtensionsEstimator(),
                simpleEstimator({ defaultComplexity: 1 }),
              ],
            });

            const maximumQueryComplexity = 15;

            if (complexity > maximumQueryComplexity) {
              console.log(complexity);

              throw new Error(
                `Maximum query complexity of ${maximumQueryComplexity} has been reached.`
              );
            }
          },
        }),
      },
    ],
  });

  // Create Express Server
  const expressServer = express();
  const port = process.env.PORT || 8000;

  // Express Middleware
  expressServer.use(
    cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
    })
  );

  // Enable express to be used with gql
  gqlServer.applyMiddleware({ app: expressServer });

  // Start Server
  expressServer.listen({ port }, () => {
    console.log(`Navigate to http://localhost:${port}${gqlServer.graphqlPath}`);
  });
})();
