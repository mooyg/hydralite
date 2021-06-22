import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentUpdateWithoutPostedbyInput } from "../inputs/PostCommentUpdateWithoutPostedbyInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentUpdateWithWhereUniqueWithoutPostedbyInput {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutPostedbyInput, {
    nullable: false
  })
  data!: PostCommentUpdateWithoutPostedbyInput;
}
