import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRoleUpdateInput } from "../../../inputs/ProjectRoleUpdateInput";
import { ProjectRoleWhereUniqueInput } from "../../../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProjectRoleArgs {
  @TypeGraphQL.Field(_type => ProjectRoleUpdateInput, {
    nullable: false
  })
  data!: ProjectRoleUpdateInput;

  @TypeGraphQL.Field(_type => ProjectRoleWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectRoleWhereUniqueInput;
}
