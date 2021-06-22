import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostGroupOrderByInput } from "../../../inputs/PostGroupOrderByInput";
import { PostGroupScalarWhereWithAggregatesInput } from "../../../inputs/PostGroupScalarWhereWithAggregatesInput";
import { PostGroupWhereInput } from "../../../inputs/PostGroupWhereInput";
import { PostGroupScalarFieldEnum } from "../../../../enums/PostGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostGroupArgs {
  @TypeGraphQL.Field(_type => PostGroupWhereInput, {
    nullable: true
  })
  where?: PostGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostGroupOrderByInput], {
    nullable: true
  })
  orderBy?: PostGroupOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description" | "isCommunity" | "creatorId" | "projectId">;

  @TypeGraphQL.Field(_type => PostGroupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostGroupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
