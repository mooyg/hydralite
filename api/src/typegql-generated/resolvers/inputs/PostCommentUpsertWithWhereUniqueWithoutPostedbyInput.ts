import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateWithoutPostedbyInput } from "../inputs/PostCommentCreateWithoutPostedbyInput";
import { PostCommentUpdateWithoutPostedbyInput } from "../inputs/PostCommentUpdateWithoutPostedbyInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentUpsertWithWhereUniqueWithoutPostedbyInput {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutPostedbyInput, {
    nullable: false
  })
  update!: PostCommentUpdateWithoutPostedbyInput;

  @TypeGraphQL.Field(_type => PostCommentCreateWithoutPostedbyInput, {
    nullable: false
  })
  create!: PostCommentCreateWithoutPostedbyInput;
}
