import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRolePermissionsCreateInput } from "../../../inputs/ProjectRolePermissionsCreateInput";
import { ProjectRolePermissionsUpdateInput } from "../../../inputs/ProjectRolePermissionsUpdateInput";
import { ProjectRolePermissionsWhereUniqueInput } from "../../../inputs/ProjectRolePermissionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProjectRolePermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectRolePermissionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsCreateInput, {
    nullable: false
  })
  create!: ProjectRolePermissionsCreateInput;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsUpdateInput, {
    nullable: false
  })
  update!: ProjectRolePermissionsUpdateInput;
}
