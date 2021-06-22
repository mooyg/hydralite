import * as TypeGraphQL from "type-graphql";

export enum AttachmentTypes {
  image = "image",
  video = "video",
  other = "other"
}
TypeGraphQL.registerEnumType(AttachmentTypes, {
  name: "AttachmentTypes",
  description: undefined,
});
