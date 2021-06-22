import * as TypeGraphQL from "type-graphql";

export enum HashtagScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  name = "name",
  numOfPosts = "numOfPosts",
  creatorId = "creatorId"
}
TypeGraphQL.registerEnumType(HashtagScalarFieldEnum, {
  name: "HashtagScalarFieldEnum",
  description: undefined,
});
