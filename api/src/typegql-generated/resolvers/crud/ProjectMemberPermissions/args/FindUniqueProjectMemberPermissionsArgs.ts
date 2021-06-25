import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberPermissionsWhereUniqueInput } from "../../../inputs/ProjectMemberPermissionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProjectMemberPermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectMemberPermissionsWhereUniqueInput;
}
