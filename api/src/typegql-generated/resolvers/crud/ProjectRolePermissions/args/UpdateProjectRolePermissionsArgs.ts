import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRolePermissionsUpdateInput } from "../../../inputs/ProjectRolePermissionsUpdateInput";
import { ProjectRolePermissionsWhereUniqueInput } from "../../../inputs/ProjectRolePermissionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProjectRolePermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsUpdateInput, {
    nullable: false
  })
  data!: ProjectRolePermissionsUpdateInput;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectRolePermissionsWhereUniqueInput;
}
