import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostGroupWhereUniqueInput } from "../../../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePostGroupArgs {
  @TypeGraphQL.Field(_type => PostGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PostGroupWhereUniqueInput;
}
