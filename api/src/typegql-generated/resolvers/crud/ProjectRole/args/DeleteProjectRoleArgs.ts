import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRoleWhereUniqueInput } from "../../../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteProjectRoleArgs {
  @TypeGraphQL.Field(_type => ProjectRoleWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectRoleWhereUniqueInput;
}
