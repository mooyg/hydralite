import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentTypes } from "../../enums/AttachmentTypes";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attachmentURL!: string;

  @TypeGraphQL.Field(_type => AttachmentTypes, {
    nullable: false
  })
  type!: "image" | "video" | "other";
}
