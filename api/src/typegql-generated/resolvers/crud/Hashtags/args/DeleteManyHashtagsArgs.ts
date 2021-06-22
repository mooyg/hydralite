import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagsWhereInput } from "../../../inputs/HashtagsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyHashtagsArgs {
  @TypeGraphQL.Field(_type => HashtagsWhereInput, {
    nullable: true
  })
  where?: HashtagsWhereInput | undefined;
}
