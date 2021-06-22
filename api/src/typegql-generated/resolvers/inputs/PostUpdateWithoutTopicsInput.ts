import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentsUpdateOneRequiredWithoutPostInput } from "../inputs/AttachmentsUpdateOneRequiredWithoutPostInput";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostCommentUpdateManyWithoutPostInput } from "../inputs/PostCommentUpdateManyWithoutPostInput";
import { PostUpdateManyWithoutCommentsInput } from "../inputs/PostUpdateManyWithoutCommentsInput";
import { PostUpdateOneRequiredWithoutPostInput } from "../inputs/PostUpdateOneRequiredWithoutPostInput";
import { ProjectGroupUpdateManyWithoutPostsInput } from "../inputs/ProjectGroupUpdateManyWithoutPostsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPostInput } from "../inputs/UserUpdateOneRequiredWithoutPostInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateWithoutTopicsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  postedtime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  DownVotes?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  Upvotes?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostInput, {
    nullable: true
  })
  postedby?: UserUpdateOneRequiredWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => ProjectGroupUpdateManyWithoutPostsInput, {
    nullable: true
  })
  ProjectGroup?: ProjectGroupUpdateManyWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentsUpdateOneRequiredWithoutPostInput, {
    nullable: true
  })
  files?: AttachmentsUpdateOneRequiredWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutPostInput, {
    nullable: true
  })
  comments?: PostUpdateOneRequiredWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutCommentsInput, {
    nullable: true
  })
  Post?: PostUpdateManyWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutPostInput, {
    nullable: true
  })
  PostComment?: PostCommentUpdateManyWithoutPostInput | undefined;
}
