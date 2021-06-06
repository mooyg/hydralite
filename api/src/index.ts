import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import cors from "cors";

import CreateSchema from "./util/CreateSchema";

(async () => {
  // Initalize typeorm
  await createConnection();

  // Initialize Apollo Server
  const schema = await CreateSchema();
  const gqlServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
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
