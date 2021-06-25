import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRolePermissionsWhereInput } from "../../../inputs/ProjectRolePermissionsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProjectRolePermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereInput, {
    nullable: true
  })
  where?: ProjectRolePermissionsWhereInput | undefined;
}
