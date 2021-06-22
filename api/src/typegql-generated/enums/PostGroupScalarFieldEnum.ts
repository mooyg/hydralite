import * as TypeGraphQL from "type-graphql";

export enum PostGroupScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  isCommunity = "isCommunity",
  creatorId = "creatorId",
  projectId = "projectId"
}
TypeGraphQL.registerEnumType(PostGroupScalarFieldEnum, {
  name: "PostGroupScalarFieldEnum",
  description: undefined,
});
