import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectGroupCreateInput } from "../../../inputs/ProjectGroupCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProjectGroupArgs {
  @TypeGraphQL.Field(_type => ProjectGroupCreateInput, {
    nullable: false
  })
  data!: ProjectGroupCreateInput;
}
