import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateWithoutCreatorInput } from "../inputs/PostGroupCreateWithoutCreatorInput";
import { PostGroupUpdateWithoutCreatorInput } from "../inputs/PostGroupUpdateWithoutCreatorInput";
import { PostGroupWhereUniqueInput } from "../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupUpsertWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => PostGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PostGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostGroupUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: PostGroupUpdateWithoutCreatorInput;

  @TypeGraphQL.Field(_type => PostGroupCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: PostGroupCreateWithoutCreatorInput;
}
