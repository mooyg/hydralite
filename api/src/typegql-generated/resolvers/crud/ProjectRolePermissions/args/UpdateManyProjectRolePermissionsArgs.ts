import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRolePermissionsUpdateManyMutationInput } from "../../../inputs/ProjectRolePermissionsUpdateManyMutationInput";
import { ProjectRolePermissionsWhereInput } from "../../../inputs/ProjectRolePermissionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProjectRolePermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectRolePermissionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereInput, {
    nullable: true
  })
  where?: ProjectRolePermissionsWhereInput | undefined;
}
