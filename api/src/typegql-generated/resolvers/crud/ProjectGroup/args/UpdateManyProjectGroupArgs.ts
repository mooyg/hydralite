import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectGroupUpdateManyMutationInput } from "../../../inputs/ProjectGroupUpdateManyMutationInput";
import { ProjectGroupWhereInput } from "../../../inputs/ProjectGroupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProjectGroupArgs {
  @TypeGraphQL.Field(_type => ProjectGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectGroupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProjectGroupWhereInput, {
    nullable: true
  })
  where?: ProjectGroupWhereInput | undefined;
}
