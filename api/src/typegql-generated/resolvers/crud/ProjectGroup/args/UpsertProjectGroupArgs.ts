import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectGroupCreateInput } from "../../../inputs/ProjectGroupCreateInput";
import { ProjectGroupUpdateInput } from "../../../inputs/ProjectGroupUpdateInput";
import { ProjectGroupWhereUniqueInput } from "../../../inputs/ProjectGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProjectGroupArgs {
  @TypeGraphQL.Field(_type => ProjectGroupWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectGroupCreateInput, {
    nullable: false
  })
  create!: ProjectGroupCreateInput;

  @TypeGraphQL.Field(_type => ProjectGroupUpdateInput, {
    nullable: false
  })
  update!: ProjectGroupUpdateInput;
}
