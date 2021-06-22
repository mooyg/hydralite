import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutAttachmentsInput } from "../inputs/PostCreateNestedOneWithoutAttachmentsInput";
import { AttachmentType } from "../../enums/AttachmentType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attachmentURL!: string;

  @TypeGraphQL.Field(_type => AttachmentType, {
    nullable: false
  })
  type!: "image" | "video" | "other";

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutAttachmentsInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutAttachmentsInput;
}
