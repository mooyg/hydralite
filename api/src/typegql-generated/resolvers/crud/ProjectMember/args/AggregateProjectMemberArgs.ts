import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberOrderByInput } from "../../../inputs/ProjectMemberOrderByInput";
import { ProjectMemberWhereInput } from "../../../inputs/ProjectMemberWhereInput";
import { ProjectMemberWhereUniqueInput } from "../../../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProjectMemberArgs {
  @TypeGraphQL.Field(_type => ProjectMemberWhereInput, {
    nullable: true
  })
  where?: ProjectMemberWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberOrderByInput], {
    nullable: true
  })
  orderBy?: ProjectMemberOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectMemberWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
