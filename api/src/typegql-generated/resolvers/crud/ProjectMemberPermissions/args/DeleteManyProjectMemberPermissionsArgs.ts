import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberPermissionsWhereInput } from "../../../inputs/ProjectMemberPermissionsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProjectMemberPermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereInput, {
    nullable: true
  })
  where?: ProjectMemberPermissionsWhereInput | undefined;
}
