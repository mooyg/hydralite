import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumAttachmentTypesFieldUpdateOperationsInput } from "../inputs/EnumAttachmentTypesFieldUpdateOperationsInput";
import { PostUpdateManyWithoutFilesInput } from "../inputs/PostUpdateManyWithoutFilesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  attachmentURL?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumAttachmentTypesFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumAttachmentTypesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutFilesInput, {
    nullable: true
  })
  Post?: PostUpdateManyWithoutFilesInput | undefined;
}
