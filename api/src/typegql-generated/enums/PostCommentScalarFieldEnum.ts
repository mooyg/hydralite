import * as TypeGraphQL from "type-graphql";

export enum PostCommentScalarFieldEnum {
  id = "id",
  body = "body",
  postedtime = "postedtime",
  userId = "userId",
  postId = "postId",
  attachments = "attachments"
}
TypeGraphQL.registerEnumType(PostCommentScalarFieldEnum, {
  name: "PostCommentScalarFieldEnum",
  description: undefined,
});
