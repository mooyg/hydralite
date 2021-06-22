import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagsOrderByInput } from "../../../inputs/HashtagsOrderByInput";
import { HashtagsWhereInput } from "../../../inputs/HashtagsWhereInput";
import { HashtagsWhereUniqueInput } from "../../../inputs/HashtagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateHashtagsArgs {
  @TypeGraphQL.Field(_type => HashtagsWhereInput, {
    nullable: true
  })
  where?: HashtagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HashtagsOrderByInput], {
    nullable: true
  })
  orderBy?: HashtagsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => HashtagsWhereUniqueInput, {
    nullable: true
  })
  cursor?: HashtagsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
