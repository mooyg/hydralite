import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectGroupWhereUniqueInput } from "../../../inputs/ProjectGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProjectGroupArgs {
  @TypeGraphQL.Field(_type => ProjectGroupWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectGroupWhereUniqueInput;
}
