import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagsOrderByInput } from "../../../inputs/HashtagsOrderByInput";
import { HashtagsScalarWhereWithAggregatesInput } from "../../../inputs/HashtagsScalarWhereWithAggregatesInput";
import { HashtagsWhereInput } from "../../../inputs/HashtagsWhereInput";
import { HashtagsScalarFieldEnum } from "../../../../enums/HashtagsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByHashtagsArgs {
  @TypeGraphQL.Field(_type => HashtagsWhereInput, {
    nullable: true
  })
  where?: HashtagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HashtagsOrderByInput], {
    nullable: true
  })
  orderBy?: HashtagsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "numofPosts" | "postId" | "userId">;

  @TypeGraphQL.Field(_type => HashtagsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: HashtagsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
