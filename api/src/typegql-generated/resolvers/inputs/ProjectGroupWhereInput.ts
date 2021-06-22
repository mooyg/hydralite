import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupWhereInput {
  @TypeGraphQL.Field(_type => [ProjectGroupWhereInput], {
    nullable: true
  })
  AND?: ProjectGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupWhereInput], {
    nullable: true
  })
  OR?: ProjectGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupWhereInput], {
    nullable: true
  })
  NOT?: ProjectGroupWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  members?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isCommunity?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  posts?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  postId?: StringFilter | undefined;
}
