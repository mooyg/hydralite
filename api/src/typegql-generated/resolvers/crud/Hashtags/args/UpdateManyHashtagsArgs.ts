import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagsUpdateManyMutationInput } from "../../../inputs/HashtagsUpdateManyMutationInput";
import { HashtagsWhereInput } from "../../../inputs/HashtagsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyHashtagsArgs {
  @TypeGraphQL.Field(_type => HashtagsUpdateManyMutationInput, {
    nullable: false
  })
  data!: HashtagsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => HashtagsWhereInput, {
    nullable: true
  })
  where?: HashtagsWhereInput | undefined;
}
