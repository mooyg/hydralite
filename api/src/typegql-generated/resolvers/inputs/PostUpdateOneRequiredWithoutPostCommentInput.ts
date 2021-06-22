import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPostCommentInput } from "../inputs/PostCreateOrConnectWithoutPostCommentInput";
import { PostCreateWithoutPostCommentInput } from "../inputs/PostCreateWithoutPostCommentInput";
import { PostUpdateWithoutPostCommentInput } from "../inputs/PostUpdateWithoutPostCommentInput";
import { PostUpsertWithoutPostCommentInput } from "../inputs/PostUpsertWithoutPostCommentInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateOneRequiredWithoutPostCommentInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutPostCommentInput, {
    nullable: true
  })
  create?: PostCreateWithoutPostCommentInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutPostCommentInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutPostCommentInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutPostCommentInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutPostCommentInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutPostCommentInput, {
    nullable: true
  })
  update?: PostUpdateWithoutPostCommentInput | undefined;
}
