import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagsCreateInput } from "../../../inputs/HashtagsCreateInput";
import { HashtagsUpdateInput } from "../../../inputs/HashtagsUpdateInput";
import { HashtagsWhereUniqueInput } from "../../../inputs/HashtagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertHashtagsArgs {
  @TypeGraphQL.Field(_type => HashtagsWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashtagsCreateInput, {
    nullable: false
  })
  create!: HashtagsCreateInput;

  @TypeGraphQL.Field(_type => HashtagsUpdateInput, {
    nullable: false
  })
  update!: HashtagsUpdateInput;
}
