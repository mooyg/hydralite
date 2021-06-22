import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateWithoutPostsInput } from "../inputs/PostGroupCreateWithoutPostsInput";
import { PostGroupUpdateWithoutPostsInput } from "../inputs/PostGroupUpdateWithoutPostsInput";
import { PostGroupWhereUniqueInput } from "../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupUpsertWithWhereUniqueWithoutPostsInput {
  @TypeGraphQL.Field(_type => PostGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PostGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostGroupUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: PostGroupUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => PostGroupCreateWithoutPostsInput, {
    nullable: false
  })
  create!: PostGroupCreateWithoutPostsInput;
}
