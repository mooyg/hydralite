import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumAttachmentTypeFieldUpdateOperationsInput } from "../inputs/EnumAttachmentTypeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutAttachmentsInput } from "../inputs/PostUpdateOneRequiredWithoutAttachmentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  attachmentURL?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumAttachmentTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumAttachmentTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutAttachmentsInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutAttachmentsInput | undefined;
}
