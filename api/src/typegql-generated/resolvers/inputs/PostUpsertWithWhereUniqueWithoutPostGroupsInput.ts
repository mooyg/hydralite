import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutPostGroupsInput } from "../inputs/PostCreateWithoutPostGroupsInput";
import { PostUpdateWithoutPostGroupsInput } from "../inputs/PostUpdateWithoutPostGroupsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutPostGroupsInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutPostGroupsInput, {
    nullable: false
  })
  update!: PostUpdateWithoutPostGroupsInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutPostGroupsInput, {
    nullable: false
  })
  create!: PostCreateWithoutPostGroupsInput;
}
