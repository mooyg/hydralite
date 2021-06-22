import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentsRelationFilter } from "../inputs/AttachmentsRelationFilter";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { HashtagsListRelationFilter } from "../inputs/HashtagsListRelationFilter";
import { PostCommentListRelationFilter } from "../inputs/PostCommentListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { ProjectGroupListRelationFilter } from "../inputs/ProjectGroupListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostWhereInput {
  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  AND?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  OR?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  NOT?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  postedby?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  postedtime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectGroupListRelationFilter, {
    nullable: true
  })
  ProjectGroup?: ProjectGroupListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AttachmentsRelationFilter, {
    nullable: true
  })
  files?: AttachmentsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  comments?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  Post?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  postId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PostCommentListRelationFilter, {
    nullable: true
  })
  PostComment?: PostCommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  DownVotes?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  Upvotes?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => HashtagsListRelationFilter, {
    nullable: true
  })
  Topics?: HashtagsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  attachmentsId?: StringFilter | undefined;
}
