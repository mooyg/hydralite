import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagsCreateInput } from "../../../inputs/HashtagsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateHashtagsArgs {
  @TypeGraphQL.Field(_type => HashtagsCreateInput, {
    nullable: false
  })
  data!: HashtagsCreateInput;
}
