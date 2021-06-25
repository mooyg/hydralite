import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRoleOrderByInput } from "../../../inputs/ProjectRoleOrderByInput";
import { ProjectRoleScalarWhereWithAggregatesInput } from "../../../inputs/ProjectRoleScalarWhereWithAggregatesInput";
import { ProjectRoleWhereInput } from "../../../inputs/ProjectRoleWhereInput";
import { ProjectRoleScalarFieldEnum } from "../../../../enums/ProjectRoleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProjectRoleArgs {
  @TypeGraphQL.Field(_type => ProjectRoleWhereInput, {
    nullable: true
  })
  where?: ProjectRoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleOrderByInput], {
    nullable: true
  })
  orderBy?: ProjectRoleOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description" | "linkedOpenEndedTasks" | "permissionsId" | "projectId">;

  @TypeGraphQL.Field(_type => ProjectRoleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProjectRoleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
