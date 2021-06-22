import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagsCreateManyInput } from "../../../inputs/HashtagsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyHashtagsArgs {
  @TypeGraphQL.Field(_type => [HashtagsCreateManyInput], {
    nullable: false
  })
  data!: HashtagsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
