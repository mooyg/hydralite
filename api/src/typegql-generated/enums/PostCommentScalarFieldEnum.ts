import * as TypeGraphQL from "type-graphql";

export enum PostCommentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  body = "body",
  creatorId = "creatorId",
  postId = "postId"
}
TypeGraphQL.registerEnumType(PostCommentScalarFieldEnum, {
  name: "PostCommentScalarFieldEnum",
  description: undefined,
});
