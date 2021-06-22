import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutCommentsInput } from "../inputs/PostUpdateOneRequiredWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCreatedPostCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCreatedPostCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  body?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCreatedPostCommentsInput, {
    nullable: true
  })
  creator?: UserUpdateOneRequiredWithoutCreatedPostCommentsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutCommentsInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutCommentsInput | undefined;
}
