import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostGroupCreateInput } from "../../../inputs/PostGroupCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePostGroupArgs {
  @TypeGraphQL.Field(_type => PostGroupCreateInput, {
    nullable: false
  })
  data!: PostGroupCreateInput;
}
