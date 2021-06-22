import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { HashtagsListRelationFilter } from "../inputs/HashtagsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OauthConnectionListRelationFilter } from "../inputs/OauthConnectionListRelationFilter";
import { PostCommentListRelationFilter } from "../inputs/PostCommentListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ProjectGroupRelationFilter } from "../inputs/ProjectGroupRelationFilter";
import { ProjectListRelationFilter } from "../inputs/ProjectListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
import { UserProfileRelationFilter } from "../inputs/UserProfileRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  joinDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  hydra?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserProfileRelationFilter, {
    nullable: true
  })
  profile?: UserProfileRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  profileId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectListRelationFilter, {
    nullable: true
  })
  ownedProjects?: ProjectListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectListRelationFilter, {
    nullable: true
  })
  allProjects?: ProjectListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectListRelationFilter, {
    nullable: true
  })
  likedProjects?: ProjectListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectListRelationFilter, {
    nullable: true
  })
  followedProjects?: ProjectListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OauthConnectionListRelationFilter, {
    nullable: true
  })
  oauthConnections?: OauthConnectionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  following?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  followers?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectGroupRelationFilter, {
    nullable: true
  })
  ProjectGroup?: ProjectGroupRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  projectGroupId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  Post?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostCommentListRelationFilter, {
    nullable: true
  })
  PostComment?: PostCommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => HashtagsListRelationFilter, {
    nullable: true
  })
  Topics?: HashtagsListRelationFilter | undefined;
}
