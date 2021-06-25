import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRoleUpdateManyMutationInput } from "../../../inputs/ProjectRoleUpdateManyMutationInput";
import { ProjectRoleWhereInput } from "../../../inputs/ProjectRoleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProjectRoleArgs {
  @TypeGraphQL.Field(_type => ProjectRoleUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectRoleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProjectRoleWhereInput, {
    nullable: true
  })
  where?: ProjectRoleWhereInput | undefined;
}
