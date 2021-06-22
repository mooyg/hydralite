import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutPostCommentInput } from "../inputs/PostCreateNestedOneWithoutPostCommentInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentCreateWithoutPostedbyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  postedtime!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attachments!: string;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutPostCommentInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutPostCommentInput;
}
