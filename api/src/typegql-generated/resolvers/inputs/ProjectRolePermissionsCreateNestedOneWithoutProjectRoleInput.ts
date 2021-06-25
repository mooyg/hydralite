import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRolePermissionsCreateOrConnectWithoutProjectRoleInput } from "../inputs/ProjectRolePermissionsCreateOrConnectWithoutProjectRoleInput";
import { ProjectRolePermissionsCreateWithoutProjectRoleInput } from "../inputs/ProjectRolePermissionsCreateWithoutProjectRoleInput";
import { ProjectRolePermissionsWhereUniqueInput } from "../inputs/ProjectRolePermissionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRolePermissionsCreateNestedOneWithoutProjectRoleInput {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsCreateWithoutProjectRoleInput, {
    nullable: true
  })
  create?: ProjectRolePermissionsCreateWithoutProjectRoleInput | undefined;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsCreateOrConnectWithoutProjectRoleInput, {
    nullable: true
  })
  connectOrCreate?: ProjectRolePermissionsCreateOrConnectWithoutProjectRoleInput | undefined;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectRolePermissionsWhereUniqueInput | undefined;
}
