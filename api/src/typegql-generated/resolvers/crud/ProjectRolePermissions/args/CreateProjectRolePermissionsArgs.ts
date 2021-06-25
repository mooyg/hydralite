import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRolePermissionsCreateInput } from "../../../inputs/ProjectRolePermissionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProjectRolePermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsCreateInput, {
    nullable: false
  })
  data!: ProjectRolePermissionsCreateInput;
}
