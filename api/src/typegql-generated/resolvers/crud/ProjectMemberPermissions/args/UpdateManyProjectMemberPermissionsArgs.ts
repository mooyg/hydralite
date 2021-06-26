import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberPermissionsUpdateManyMutationInput } from "../../../inputs/ProjectMemberPermissionsUpdateManyMutationInput";
import { ProjectMemberPermissionsWhereInput } from "../../../inputs/ProjectMemberPermissionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProjectMemberPermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectMemberPermissionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereInput, {
    nullable: true
  })
  where?: ProjectMemberPermissionsWhereInput | undefined;
}
