import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberOrderByInput } from "../../../inputs/ProjectMemberOrderByInput";
import { ProjectMemberScalarWhereWithAggregatesInput } from "../../../inputs/ProjectMemberScalarWhereWithAggregatesInput";
import { ProjectMemberWhereInput } from "../../../inputs/ProjectMemberWhereInput";
import { ProjectMemberScalarFieldEnum } from "../../../../enums/ProjectMemberScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProjectMemberArgs {
  @TypeGraphQL.Field(_type => ProjectMemberWhereInput, {
    nullable: true
  })
  where?: ProjectMemberWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberOrderByInput], {
    nullable: true
  })
  orderBy?: ProjectMemberOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "awaitingApproval" | "projectId" | "userId">;

  @TypeGraphQL.Field(_type => ProjectMemberScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProjectMemberScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
