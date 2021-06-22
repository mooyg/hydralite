import * as TypeGraphQL from "type-graphql";

export enum AttachmentScalarFieldEnum {
  id = "id",
  attachmentURL = "attachmentURL",
  type = "type",
  postId = "postId"
}
TypeGraphQL.registerEnumType(AttachmentScalarFieldEnum, {
  name: "AttachmentScalarFieldEnum",
  description: undefined,
});
