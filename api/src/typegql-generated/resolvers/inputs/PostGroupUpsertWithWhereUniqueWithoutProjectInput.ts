import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateWithoutProjectInput } from "../inputs/PostGroupCreateWithoutProjectInput";
import { PostGroupUpdateWithoutProjectInput } from "../inputs/PostGroupUpdateWithoutProjectInput";
import { PostGroupWhereUniqueInput } from "../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => PostGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PostGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostGroupUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: PostGroupUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => PostGroupCreateWithoutProjectInput, {
    nullable: false
  })
  create!: PostGroupCreateWithoutProjectInput;
}
