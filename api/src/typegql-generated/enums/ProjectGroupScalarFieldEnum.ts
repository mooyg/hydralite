import * as TypeGraphQL from "type-graphql";

export enum ProjectGroupScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  isCommunity = "isCommunity",
  postId = "postId"
}
TypeGraphQL.registerEnumType(ProjectGroupScalarFieldEnum, {
  name: "ProjectGroupScalarFieldEnum",
  description: undefined,
});
