import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateWithoutMembersInput } from "../inputs/PostGroupCreateWithoutMembersInput";
import { PostGroupUpdateWithoutMembersInput } from "../inputs/PostGroupUpdateWithoutMembersInput";
import { PostGroupWhereUniqueInput } from "../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupUpsertWithWhereUniqueWithoutMembersInput {
  @TypeGraphQL.Field(_type => PostGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PostGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostGroupUpdateWithoutMembersInput, {
    nullable: false
  })
  update!: PostGroupUpdateWithoutMembersInput;

  @TypeGraphQL.Field(_type => PostGroupCreateWithoutMembersInput, {
    nullable: false
  })
  create!: PostGroupCreateWithoutMembersInput;
}
