import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectGroupWhereInput } from "../../../inputs/ProjectGroupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProjectGroupArgs {
  @TypeGraphQL.Field(_type => ProjectGroupWhereInput, {
    nullable: true
  })
  where?: ProjectGroupWhereInput | undefined;
}
