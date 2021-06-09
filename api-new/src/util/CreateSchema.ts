import { GraphQLSchema } from "graphql";
import MainResolver from "../resolvers/Main/Main.resolver";
import { buildSchema } from "type-graphql";

export default async function CreateSchema(): Promise<GraphQLSchema> {
  return buildSchema({
    resolvers: [MainResolver],
  });
}
