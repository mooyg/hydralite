import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagsWhereUniqueInput } from "../../../inputs/HashtagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteHashtagsArgs {
  @TypeGraphQL.Field(_type => HashtagsWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagsWhereUniqueInput;
}
