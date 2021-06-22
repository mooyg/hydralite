import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectGroupUpdateInput } from "../../../inputs/ProjectGroupUpdateInput";
import { ProjectGroupWhereUniqueInput } from "../../../inputs/ProjectGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProjectGroupArgs {
  @TypeGraphQL.Field(_type => ProjectGroupUpdateInput, {
    nullable: false
  })
  data!: ProjectGroupUpdateInput;

  @TypeGraphQL.Field(_type => ProjectGroupWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectGroupWhereUniqueInput;
}
