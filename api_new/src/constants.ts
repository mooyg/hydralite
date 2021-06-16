import { NonEmptyArray } from "type-graphql";

export const projectName = "hydralite";
export const pathsToResolvers = [
  __dirname + "\\prisma\\generated\\typegraphql-prisma",
] as NonEmptyArray<string>;
export const isProd = process.env.NODE_ENV === "production";
