import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRoleWhereInput } from "../../../inputs/ProjectRoleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProjectRoleArgs {
  @TypeGraphQL.Field(_type => ProjectRoleWhereInput, {
    nullable: true
  })
  where?: ProjectRoleWhereInput | undefined;
}
