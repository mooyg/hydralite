import * as Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import * as cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { HelloResolver } from "./modules/Hello.resolver";
import { PrismaClient } from ".prisma/client";
import * as connectRedis from "connect-redis";
import * as session from "express-session";
import { redis } from "./redis/redis";
import * as dotenv from "dotenv";
dotenv.config();
const db = new PrismaClient();

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => {
      return {
        prisma: db,
        req,
      };
    },
  });
  const app = Express();

  const RedisStore = connectRedis(session);
  let corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };
  app.use(cors(corsOptions));

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: "qid",
      secret: "shsaudasiua",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    })
  );

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("Server launched on http://localhost:4000 🚀 ");
  });
};
main();
