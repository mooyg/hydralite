import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberCreateInput } from "../../../inputs/ProjectMemberCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProjectMemberArgs {
  @TypeGraphQL.Field(_type => ProjectMemberCreateInput, {
    nullable: false
  })
  data!: ProjectMemberCreateInput;
}
