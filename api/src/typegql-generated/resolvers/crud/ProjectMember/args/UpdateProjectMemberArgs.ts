import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberUpdateInput } from "../../../inputs/ProjectMemberUpdateInput";
import { ProjectMemberWhereUniqueInput } from "../../../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProjectMemberArgs {
  @TypeGraphQL.Field(_type => ProjectMemberUpdateInput, {
    nullable: false
  })
  data!: ProjectMemberUpdateInput;

  @TypeGraphQL.Field(_type => ProjectMemberWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectMemberWhereUniqueInput;
}
