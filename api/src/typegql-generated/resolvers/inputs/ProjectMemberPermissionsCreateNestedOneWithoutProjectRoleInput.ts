import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberPermissionsCreateOrConnectWithoutProjectRoleInput } from "../inputs/ProjectMemberPermissionsCreateOrConnectWithoutProjectRoleInput";
import { ProjectMemberPermissionsCreateWithoutProjectRoleInput } from "../inputs/ProjectMemberPermissionsCreateWithoutProjectRoleInput";
import { ProjectMemberPermissionsWhereUniqueInput } from "../inputs/ProjectMemberPermissionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberPermissionsCreateNestedOneWithoutProjectRoleInput {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateWithoutProjectRoleInput, {
    nullable: true
  })
  create?: ProjectMemberPermissionsCreateWithoutProjectRoleInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateOrConnectWithoutProjectRoleInput, {
    nullable: true
  })
  connectOrCreate?: ProjectMemberPermissionsCreateOrConnectWithoutProjectRoleInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectMemberPermissionsWhereUniqueInput | undefined;
}
