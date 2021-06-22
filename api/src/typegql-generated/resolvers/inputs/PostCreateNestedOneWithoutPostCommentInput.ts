import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPostCommentInput } from "../inputs/PostCreateOrConnectWithoutPostCommentInput";
import { PostCreateWithoutPostCommentInput } from "../inputs/PostCreateWithoutPostCommentInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedOneWithoutPostCommentInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutPostCommentInput, {
    nullable: true
  })
  create?: PostCreateWithoutPostCommentInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutPostCommentInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutPostCommentInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}
