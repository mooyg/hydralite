import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentTypes } from "../../enums/AttachmentTypes";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AttachmentsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attachmentURL!: string | null;

  @TypeGraphQL.Field(_type => AttachmentTypes, {
    nullable: true
  })
  type!: "image" | "video" | "other" | null;
}
