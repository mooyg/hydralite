import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectGroupOrderByInput } from "../../../inputs/ProjectGroupOrderByInput";
import { ProjectGroupScalarWhereWithAggregatesInput } from "../../../inputs/ProjectGroupScalarWhereWithAggregatesInput";
import { ProjectGroupWhereInput } from "../../../inputs/ProjectGroupWhereInput";
import { ProjectGroupScalarFieldEnum } from "../../../../enums/ProjectGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProjectGroupArgs {
  @TypeGraphQL.Field(_type => ProjectGroupWhereInput, {
    nullable: true
  })
  where?: ProjectGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupOrderByInput], {
    nullable: true
  })
  orderBy?: ProjectGroupOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description" | "isCommunity" | "postId">;

  @TypeGraphQL.Field(_type => ProjectGroupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProjectGroupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
