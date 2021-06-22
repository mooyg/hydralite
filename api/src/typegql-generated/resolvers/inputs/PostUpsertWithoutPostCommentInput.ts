import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutPostCommentInput } from "../inputs/PostCreateWithoutPostCommentInput";
import { PostUpdateWithoutPostCommentInput } from "../inputs/PostUpdateWithoutPostCommentInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithoutPostCommentInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutPostCommentInput, {
    nullable: false
  })
  update!: PostUpdateWithoutPostCommentInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutPostCommentInput, {
    nullable: false
  })
  create!: PostCreateWithoutPostCommentInput;
}
