import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsScalarWhereInput {
  @TypeGraphQL.Field(_type => [HashtagsScalarWhereInput], {
    nullable: true
  })
  AND?: HashtagsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsScalarWhereInput], {
    nullable: true
  })
  OR?: HashtagsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsScalarWhereInput], {
    nullable: true
  })
  NOT?: HashtagsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  numofPosts?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  postId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
