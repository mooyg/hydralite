import * as TypeGraphQL from "type-graphql";

export enum PostScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  postedtime = "postedtime",
  userId = "userId",
  postId = "postId",
  DownVotes = "DownVotes",
  Upvotes = "Upvotes",
  attachmentsId = "attachmentsId"
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});
