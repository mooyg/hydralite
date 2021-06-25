import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberWhereUniqueInput } from "../../../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProjectMemberArgs {
  @TypeGraphQL.Field(_type => ProjectMemberWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectMemberWhereUniqueInput;
}
