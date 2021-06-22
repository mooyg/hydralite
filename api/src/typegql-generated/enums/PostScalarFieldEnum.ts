import * as TypeGraphQL from "type-graphql";

export enum PostScalarFieldEnum {
  id = "id",
  postedtime = "postedtime",
  title = "title",
  description = "description",
  isAnnouncement = "isAnnouncement",
  creatorId = "creatorId"
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});
