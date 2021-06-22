import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostGroupCreateInput } from "../../../inputs/PostGroupCreateInput";
import { PostGroupUpdateInput } from "../../../inputs/PostGroupUpdateInput";
import { PostGroupWhereUniqueInput } from "../../../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPostGroupArgs {
  @TypeGraphQL.Field(_type => PostGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PostGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostGroupCreateInput, {
    nullable: false
  })
  create!: PostGroupCreateInput;

  @TypeGraphQL.Field(_type => PostGroupUpdateInput, {
    nullable: false
  })
  update!: PostGroupUpdateInput;
}
