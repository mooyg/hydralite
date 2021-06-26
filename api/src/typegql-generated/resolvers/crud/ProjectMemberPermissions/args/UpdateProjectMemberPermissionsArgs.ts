import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberPermissionsUpdateInput } from "../../../inputs/ProjectMemberPermissionsUpdateInput";
import { ProjectMemberPermissionsWhereUniqueInput } from "../../../inputs/ProjectMemberPermissionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProjectMemberPermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsUpdateInput, {
    nullable: false
  })
  data!: ProjectMemberPermissionsUpdateInput;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectMemberPermissionsWhereUniqueInput;
}
