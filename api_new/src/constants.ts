import { NonEmptyArray } from "type-graphql";

export const projectName = "hydralite";
export const pathsToResolvers = [
  __dirname + "\\resolvers\\**\\*.resolver.js",
] as NonEmptyArray<string>;
export const isProd = process.env.NODE_ENV === "production";
