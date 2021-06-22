import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsWhereInput {
  @TypeGraphQL.Field(_type => [HashtagsWhereInput], {
    nullable: true
  })
  AND?: HashtagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsWhereInput], {
    nullable: true
  })
  OR?: HashtagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsWhereInput], {
    nullable: true
  })
  NOT?: HashtagsWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  createdBy?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  Post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  postId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
