import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRoleOrderByInput } from "../../../inputs/ProjectRoleOrderByInput";
import { ProjectRoleWhereInput } from "../../../inputs/ProjectRoleWhereInput";
import { ProjectRoleWhereUniqueInput } from "../../../inputs/ProjectRoleWhereUniqueInput";
import { ProjectRoleScalarFieldEnum } from "../../../../enums/ProjectRoleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProjectRoleArgs {
  @TypeGraphQL.Field(_type => ProjectRoleWhereInput, {
    nullable: true
  })
  where?: ProjectRoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleOrderByInput], {
    nullable: true
  })
  orderBy?: ProjectRoleOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectRoleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "linkedOpenEndedTasks" | "permissionsId" | "projectId"> | undefined;
}
