import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostGroupWhereUniqueInput } from "../../../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePostGroupArgs {
  @TypeGraphQL.Field(_type => PostGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PostGroupWhereUniqueInput;
}
