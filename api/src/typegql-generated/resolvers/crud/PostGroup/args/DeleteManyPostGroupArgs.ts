import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostGroupWhereInput } from "../../../inputs/PostGroupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPostGroupArgs {
  @TypeGraphQL.Field(_type => PostGroupWhereInput, {
    nullable: true
  })
  where?: PostGroupWhereInput | undefined;
}
