import * as TypeGraphQL from "type-graphql";

export enum AttachmentType {
  image = "image",
  video = "video",
  other = "other"
}
TypeGraphQL.registerEnumType(AttachmentType, {
  name: "AttachmentType",
  description: undefined,
});
