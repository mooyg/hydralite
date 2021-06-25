import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRolePermissionsOrderByInput } from "../../../inputs/ProjectRolePermissionsOrderByInput";
import { ProjectRolePermissionsWhereInput } from "../../../inputs/ProjectRolePermissionsWhereInput";
import { ProjectRolePermissionsWhereUniqueInput } from "../../../inputs/ProjectRolePermissionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProjectRolePermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereInput, {
    nullable: true
  })
  where?: ProjectRolePermissionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectRolePermissionsOrderByInput], {
    nullable: true
  })
  orderBy?: ProjectRolePermissionsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectRolePermissionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
