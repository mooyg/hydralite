import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRoleCreateInput } from "../../../inputs/ProjectRoleCreateInput";
import { ProjectRoleUpdateInput } from "../../../inputs/ProjectRoleUpdateInput";
import { ProjectRoleWhereUniqueInput } from "../../../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProjectRoleArgs {
  @TypeGraphQL.Field(_type => ProjectRoleWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectRoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectRoleCreateInput, {
    nullable: false
  })
  create!: ProjectRoleCreateInput;

  @TypeGraphQL.Field(_type => ProjectRoleUpdateInput, {
    nullable: false
  })
  update!: ProjectRoleUpdateInput;
}
