import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentTypes } from "../../enums/AttachmentTypes";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumAttachmentTypesFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => AttachmentTypes, {
    nullable: true
  })
  set?: "image" | "video" | "other" | undefined;
}
