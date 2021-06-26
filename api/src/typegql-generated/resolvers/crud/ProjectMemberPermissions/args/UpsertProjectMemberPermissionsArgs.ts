import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberPermissionsCreateInput } from "../../../inputs/ProjectMemberPermissionsCreateInput";
import { ProjectMemberPermissionsUpdateInput } from "../../../inputs/ProjectMemberPermissionsUpdateInput";
import { ProjectMemberPermissionsWhereUniqueInput } from "../../../inputs/ProjectMemberPermissionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProjectMemberPermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectMemberPermissionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateInput, {
    nullable: false
  })
  create!: ProjectMemberPermissionsCreateInput;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsUpdateInput, {
    nullable: false
  })
  update!: ProjectMemberPermissionsUpdateInput;
}
