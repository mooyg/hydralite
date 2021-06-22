import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostGroupUpdateInput } from "../../../inputs/PostGroupUpdateInput";
import { PostGroupWhereUniqueInput } from "../../../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePostGroupArgs {
  @TypeGraphQL.Field(_type => PostGroupUpdateInput, {
    nullable: false
  })
  data!: PostGroupUpdateInput;

  @TypeGraphQL.Field(_type => PostGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PostGroupWhereUniqueInput;
}
