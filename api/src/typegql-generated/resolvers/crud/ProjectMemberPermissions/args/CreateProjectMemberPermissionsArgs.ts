import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberPermissionsCreateInput } from "../../../inputs/ProjectMemberPermissionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProjectMemberPermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateInput, {
    nullable: false
  })
  data!: ProjectMemberPermissionsCreateInput;
}
