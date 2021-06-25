import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRoleCreateInput } from "../../../inputs/ProjectRoleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProjectRoleArgs {
  @TypeGraphQL.Field(_type => ProjectRoleCreateInput, {
    nullable: false
  })
  data!: ProjectRoleCreateInput;
}
