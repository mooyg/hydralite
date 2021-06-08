import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import cors from "cors";
import {
  fieldExtensionsEstimator,
  getComplexity,
  simpleEstimator,
} from "graphql-query-complexity";
import CreateSchema from "./util/CreateSchema";
import { MikroORM } from "@mikro-orm/core";
import { ContextType } from "./types/Context.type";

(async () => {
  // Initalize mikroorm
  const orm = await MikroORM.init({
    entities: ["../dist/db/entity/**/*.entity.js"],
    entitiesTs: ["../src/db/entity/**/*.entity.js"],
    dbName: "devmark",
    type: "postgresql",
    clientUrl: "http://localhost:5432",
  });
  await orm.getMigrator().up();

  // Initialize Apollo Server
  const schema = await CreateSchema();
  const gqlServer = new ApolloServer({
    schema,
    context: ({ req, res, em }: ContextType) => ({ req, res, em }),
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
