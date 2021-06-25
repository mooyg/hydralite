import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberCreateInput } from "../../../inputs/ProjectMemberCreateInput";
import { ProjectMemberUpdateInput } from "../../../inputs/ProjectMemberUpdateInput";
import { ProjectMemberWhereUniqueInput } from "../../../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProjectMemberArgs {
  @TypeGraphQL.Field(_type => ProjectMemberWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectMemberWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectMemberCreateInput, {
    nullable: false
  })
  create!: ProjectMemberCreateInput;

  @TypeGraphQL.Field(_type => ProjectMemberUpdateInput, {
    nullable: false
  })
  update!: ProjectMemberUpdateInput;
}
