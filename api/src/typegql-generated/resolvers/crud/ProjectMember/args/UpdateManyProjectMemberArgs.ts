import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberUpdateManyMutationInput } from "../../../inputs/ProjectMemberUpdateManyMutationInput";
import { ProjectMemberWhereInput } from "../../../inputs/ProjectMemberWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProjectMemberArgs {
  @TypeGraphQL.Field(_type => ProjectMemberUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectMemberUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProjectMemberWhereInput, {
    nullable: true
  })
  where?: ProjectMemberWhereInput | undefined;
}
