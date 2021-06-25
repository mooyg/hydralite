import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRolePermissionsWhereUniqueInput } from "../../../inputs/ProjectRolePermissionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProjectRolePermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectRolePermissionsWhereUniqueInput;
}
