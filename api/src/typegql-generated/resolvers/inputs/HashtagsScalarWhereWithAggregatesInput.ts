import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [HashtagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: HashtagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: HashtagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: HashtagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  numofPosts?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  postId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
