import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutPostCommentInput } from "../inputs/PostUpdateOneRequiredWithoutPostCommentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPostCommentInput } from "../inputs/UserUpdateOneRequiredWithoutPostCommentInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  body?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  postedtime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  attachments?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostCommentInput, {
    nullable: true
  })
  postedby?: UserUpdateOneRequiredWithoutPostCommentInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutPostCommentInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutPostCommentInput | undefined;
}
