import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberWhereInput } from "../../../inputs/ProjectMemberWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProjectMemberArgs {
  @TypeGraphQL.Field(_type => ProjectMemberWhereInput, {
    nullable: true
  })
  where?: ProjectMemberWhereInput | undefined;
}
