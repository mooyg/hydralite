import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagsUpdateInput } from "../../../inputs/HashtagsUpdateInput";
import { HashtagsWhereUniqueInput } from "../../../inputs/HashtagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateHashtagsArgs {
  @TypeGraphQL.Field(_type => HashtagsUpdateInput, {
    nullable: false
  })
  data!: HashtagsUpdateInput;

  @TypeGraphQL.Field(_type => HashtagsWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagsWhereUniqueInput;
}
