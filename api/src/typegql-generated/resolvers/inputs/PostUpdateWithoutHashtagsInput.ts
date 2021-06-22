import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentUpdateManyWithoutPostInput } from "../inputs/AttachmentUpdateManyWithoutPostInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostCommentUpdateManyWithoutPostInput } from "../inputs/PostCommentUpdateManyWithoutPostInput";
import { PostGroupUpdateManyWithoutPostsInput } from "../inputs/PostGroupUpdateManyWithoutPostsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPostsInput } from "../inputs/UserUpdateOneRequiredWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  postedtime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isAnnouncement?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostGroupUpdateManyWithoutPostsInput, {
    nullable: true
  })
  postGroups?: PostGroupUpdateManyWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsInput, {
    nullable: true
  })
  creator?: UserUpdateOneRequiredWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutPostInput, {
    nullable: true
  })
  comments?: PostCommentUpdateManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentUpdateManyWithoutPostInput, {
    nullable: true
  })
  attachments?: AttachmentUpdateManyWithoutPostInput | undefined;
}
